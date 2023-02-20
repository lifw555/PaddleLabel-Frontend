import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Space, Spin, message } from 'antd';
import { history } from 'umi';
import Guide from '@/components/Guide';
import PPContainer from '@/components/PPContainer';
import PPCard from '@/components/PPCard';
import PPBlock from '@/components/PPBlock';
import PPTable from '@/components/PPTable';
import PPButton from '@/components/PPButton';
import PPSampleButton from '@/components/PPSampleButton';
import PPOverlapCol from '@/components/PPOverlapCol';
import { toDict, ProjectUtils, getVersion, snake2camel } from '@/services/utils';
import { createInfo } from '@/services/utils';
import { IntlInitJsx } from '@/components/PPIntl';
import type { ColumnsType } from 'antd/es/table';
import type { Project } from '@/services/web/models';
// import classNames from 'classnames';

const Projects: React.FC = (props) => {
  const intlJsx = IntlInitJsx('pages.welcome');
  const projects = ProjectUtils(useState);
  useEffect(() => {
    getVersion().then((version) => {
      if (version != false) projects.getAll();
    });
  }, []);

  const columns: ColumnsType<Project> = [
    {
      title: 'ID',
      dataIndex: 'projectId',
      key: 'projectId',
      width: '4.5rem',
      align: 'center',
      render: (text: string) => <>{text}</>,
      sorter: (a, b) => a.projectId - b.projectId,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'projectId',
      width: '30rem',
    },
    {
      title: 'Project Category',
      key: 'projectId',
      width: '20rem',
      render: (project) => {
        const categoryName = snake2camel(project.taskCategory.name);
        return intlJsx(categoryName, 'global');
      },
    },
    {
      title: 'Actions',
      key: 'projectId',
      align: 'center',
      render: (text, project) => (
        <Space size="middle">
          <PPButton
            width="4.375rem"
            height="1.875rem"
            color={'rgba(241,162,0,1)'}
            onClick={() => {
              history.push(`/project_overview?projectId=${project.projectId}`);
            }}
          >
            {intlJsx('overview')}
          </PPButton>
          <PPButton
            width="4.375rem"
            height="1.875rem"
            color={'rgba(0,100,248,1)'}
            onClick={() => {
              history.push(`/${project.taskCategory.name}?projectId=${project.projectId}`);
            }}
          >
            {intlJsx('label')}
          </PPButton>
          <PPButton
            width="4.375rem"
            height="1.875rem"
            color={'rgba(207,63,0,1)'}
            onClick={() => {
              props.setDeleting(true);
              projects.remove(project).then(() => props.setDeleting(false));
            }}
          >
            {intlJsx('remove')}
          </PPButton>
        </Space>
      ),
    },
  ];
  if (!projects.all?.length) return '';

  return (
    <Row style={{ marginTop: 20 }}>
      <Col span={24}>
        <PPBlock title={intlJsx('myProjects')}>
          <PPTable columns={columns} dataSource={toDict(projects.all)} showHeader={false} />
        </PPBlock>
      </Col>
    </Row>
  );
};

const Welcome: React.FC = () => {
  const intlJsx = IntlInitJsx('pages.welcome');

  const [isGuideComplete, setIsGuideComplete] = useState(true);
  const [deleting, setDeleting] = useState<boolean>(false);
  const guideSteps = [
    {
      element: '#step1',
      intro: 'This is step 1.',
      position: 'bottom',
    },
    {
      element: '#step2',
      intro: 'This is step 2.',
      position: 'bottom',
    },
    {
      element: '#step3',
      intro: 'This is step 2.',
      position: 'bottom',
    },
  ];
  const handleGuideComplete = () => {
    setIsGuideComplete(true);
  };
  function createButtons() {
    const creators = [];
    for (const [taskCategory, info] of Object.entries(createInfo)) {
      creators.push(
        <PPOverlapCol span={4}>
          <PPCard
            imgSrc={info.avatar}
            href={'/project_detail?taskCategory=' + taskCategory}
            onClick={
              taskCategory != 'keypointDetection'
                ? undefined
                : () => {
                    message.info(intlJsx('underDevelopment', 'global'));
                  }
            }
          >
            {intlJsx(taskCategory, 'global')}
          </PPCard>
        </PPOverlapCol>,
      );
    }
    return creators;
  }
  useEffect(() => {
    const { pathname } = history.location;
    const strings = localStorage.getItem('FirstPath');
    if (strings) {
      const pathObject = JSON.parse(strings);
      if (!pathObject[pathname]) {
        setIsGuideComplete(false);
        const newPathObject = {
          ...pathObject,
          [pathname]: true,
        };
        localStorage.setItem('FirstPath', JSON.stringify(newPathObject));
      }
    } else {
      setIsGuideComplete(false);
      const newPathObject = {
        [pathname]: true,
      };
      localStorage.setItem('FirstPath', JSON.stringify(newPathObject));
    }
  }, []);
  return (
    <PPContainer>
      <Row gutter={[20, 20]}>
        {/* 样例项目 */}
        <Col id="step1" span={24}>
          <PPSampleButton
            className="step1"
            onClick={() => {
              history.push('/sample_project');
            }}
          >
            {/* <Intl id={'sampleProject'} /> */}
            {intlJsx('sampleProject')}
          </PPSampleButton>
        </Col>
      </Row>

      <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
        {/* 卡片区域 */}
        <Col id="step2" span={17}>
          <PPBlock classNames="step4" title={intlJsx('createProject')} style={{ height: 430 }}>
            <Row>{createButtons()}</Row>
          </PPBlock>
        </Col>
        {/* 按钮区域 */}
        <Col id="step3" span={7}>
          <PPBlock classNames="step3" title={intlJsx('trainingKnowledge')} style={{ height: 430 }}>
            <Space direction="vertical" style={{ width: '100%' }} size={10}>
              <Button
                type="primary"
                style={{ height: '3.125rem' }}
                onClick={() => {
                  window.open(`/static/doc/CN/training/PdLabel_PdClas.html`);
                }}
                block
              >
                {intlJsx('paddleClas')}
              </Button>
              <Button
                type="primary"
                style={{ height: '3.125rem' }}
                onClick={() => {
                  window.open('/static/doc/CN/training/PdLabel_PdDet.html');
                }}
                block
              >
                {intlJsx('paddleDet')}
              </Button>
              <Button
                type="primary"
                style={{ height: '3.125rem' }}
                onClick={() => {
                  window.open('/static/doc/CN/training/PdLabel_PdSeg.html');
                }}
                block
              >
                {intlJsx('paddleSeg')}
              </Button>
              <Button
                type="primary"
                style={{ height: '3.125rem' }}
                onClick={() => {
                  window.open('/static/doc/CN/training/PdLabel_PdX.html');
                }}
                block
              >
                {intlJsx('paddleX')}
              </Button>
            </Space>
          </PPBlock>
        </Col>
      </Row>
      <Spin tip="Deleting" spinning={deleting}>
        {Projects({ setDeleting: setDeleting })}
      </Spin>
      {!isGuideComplete && <Guide steps={guideSteps} onGuideComplete={handleGuideComplete} />}
    </PPContainer>
  );
};

export default Welcome;

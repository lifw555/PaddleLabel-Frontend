/* tslint:disable */
/* eslint-disable */
/**
 * PP-Label API Spec
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  Annotation,
  AnnotationFromJSON,
  AnnotationToJSON,
  Label,
  LabelFromJSON,
  LabelToJSON,
  Project,
  ProjectFromJSON,
  ProjectToJSON,
  Tag,
  TagFromJSON,
  TagToJSON,
  Task,
  TaskFromJSON,
  TaskToJSON,
} from '../models';

export interface DeleteRequest {
  projectId: string;
  requestId?: string;
}

export interface ByProjectRequest {
  projectId: string;
}

export interface ByProject0Request {
  projectId: string;
}

export interface ByProject1Request {
  projectId: string;
}

export interface ByProject2Request {
  projectId: string;
}

export interface CreateRequest {
  project: Project;
  requestId?: string;
}

export interface GetRequest {
  projectId: string;
  requestId?: string;
}

export interface GetAllRequest {
  requestId?: string;
}

export interface UpdateRequest {
  projectId: string;
  project: Project;
  requestId?: string;
}

/**
 *
 */
export class ProjectApi extends runtime.BaseAPI {
  /**
   * Delete a project record and ALL TASKS RECORDS under the project. Won\'t delete file on file system
   * Delete a project record and ALL TASKS RECORDS under the project.
   */
  async _deleteRaw(
    requestParameters: DeleteRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling _delete.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete a project record and ALL TASKS RECORDS under the project. Won\'t delete file on file system
   * Delete a project record and ALL TASKS RECORDS under the project.
   */
  async _delete(projectId: string, requestId?: string, initOverrides?: RequestInit): Promise<void> {
    await this._deleteRaw({ projectId: projectId, requestId: requestId }, initOverrides);
  }

  /**
   * Your GET endpoint
   */
  async byProjectRaw(
    requestParameters: ByProjectRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Task>>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling byProject.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/tasks`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskFromJSON));
  }

  /**
   * Your GET endpoint
   */
  async byProject(projectId: string, initOverrides?: RequestInit): Promise<Array<Task>> {
    const response = await this.byProjectRaw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   * Your GET endpoint
   */
  async byProject_1Raw(
    requestParameters: ByProject0Request,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Label>>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling byProject_1.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/labels`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LabelFromJSON));
  }

  /**
   * Your GET endpoint
   */
  async byProject_1(projectId: string, initOverrides?: RequestInit): Promise<Array<Label>> {
    const response = await this.byProject_1Raw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   * Your GET endpoint
   */
  async byProject_2Raw(
    requestParameters: ByProject1Request,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Annotation>>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling byProject_2.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/annotations`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AnnotationFromJSON));
  }

  /**
   * Your GET endpoint
   */
  async byProject_2(projectId: string, initOverrides?: RequestInit): Promise<Array<Annotation>> {
    const response = await this.byProject_2Raw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   * Your GET endpoint
   */
  async byProject_3Raw(
    requestParameters: ByProject2Request,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Tag>>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling byProject_3.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/tags`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagFromJSON));
  }

  /**
   * Your GET endpoint
   */
  async byProject_3(projectId: string, initOverrides?: RequestInit): Promise<Array<Tag>> {
    const response = await this.byProject_3Raw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   * Create a new project
   */
  async createRaw(
    requestParameters: CreateRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters.project === null || requestParameters.project === undefined) {
      throw new runtime.RequiredError(
        'project',
        'Required parameter requestParameters.project was null or undefined when calling create.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/projects`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ProjectToJSON(requestParameters.project),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   * Create a new project
   */
  async create(
    project: Project,
    requestId?: string,
    initOverrides?: RequestInit,
  ): Promise<Project> {
    const response = await this.createRaw(
      { project: project, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get info of a specific project
   */
  async getRaw(
    requestParameters: GetRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling get.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   * Get info of a specific project
   */
  async get(projectId: string, requestId?: string, initOverrides?: RequestInit): Promise<Project> {
    const response = await this.getRaw(
      { projectId: projectId, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getAllRaw(
    requestParameters: GetAllRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<Project>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/projects`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectFromJSON));
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getAll(requestId?: string, initOverrides?: RequestInit): Promise<Array<Project>> {
    const response = await this.getAllRaw({ requestId: requestId }, initOverrides);
    return await response.value();
  }

  /**
   * Edit multiple project properties. Empty strings will be set. Properties not in request body won\'t be changed
   * Edit multiple project properties
   */
  async updateRaw(
    requestParameters: UpdateRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling update.',
      );
    }

    if (requestParameters.project === null || requestParameters.project === undefined) {
      throw new runtime.RequiredError(
        'project',
        'Required parameter requestParameters.project was null or undefined when calling update.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ProjectToJSON(requestParameters.project),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   * Edit multiple project properties. Empty strings will be set. Properties not in request body won\'t be changed
   * Edit multiple project properties
   */
  async update(
    projectId: string,
    project: Project,
    requestId?: string,
    initOverrides?: RequestInit,
  ): Promise<Project> {
    const response = await this.updateRaw(
      { projectId: projectId, project: project, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }
}

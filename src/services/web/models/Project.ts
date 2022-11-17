/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Label } from './Label';
import { LabelFromJSON, LabelFromJSONTyped, LabelToJSON } from './Label';
import type { ProjectOtherSettings } from './ProjectOtherSettings';
import {
  ProjectOtherSettingsFromJSON,
  ProjectOtherSettingsFromJSONTyped,
  ProjectOtherSettingsToJSON,
} from './ProjectOtherSettings';

/**
 * 项目基本信息和设置
 * @export
 * @interface Project
 */
export interface Project {
  /**
   * project表的主键，从1开始
   * @type {number}
   * @memberof Project
   */
  readonly projectId?: number;
  /**
   * 项目名字
   * @type {string}
   * @memberof Project
   */
  name?: string;
  /**
   * Optional project description
   * @type {string}
   * @memberof Project
   */
  description?: string;
  /**
   * Top level annotation task category, see TODO for int <-> category map
   * @type {number}
   * @memberof Project
   */
  taskCategoryId?: number;
  /**
   *
   * @type {string}
   * @memberof Project
   */
  readonly taskCategory?: string;
  /**
   * Absolute directory path where all the data file is stored
   * @type {string}
   * @memberof Project
   */
  dataDir?: string;
  /**
   * Absolute directory path where all the label files are stored
   * @type {string}
   * @memberof Project
   * @deprecated
   */
  labelDir?: string;
  /**
   *
   * @type {Array<Label>}
   * @memberof Project
   */
  labels?: Array<Label>;
  /**
   * eg: single_class/multi_class for classification
   * @type {string}
   * @memberof Project
   */
  labelFormat?: string;
  /**
   * Project creation timestamp in UTC
   * @type {string}
   * @memberof Project
   */
  readonly created?: string | null;
  /**
   * Last time the project detail or ANY TASK of the project is modified
   * @type {string}
   * @memberof Project
   */
  readonly modified?: string | null;
  /**
   *
   * @type {ProjectOtherSettings}
   * @memberof Project
   */
  otherSettings?: ProjectOtherSettings;
  /**
   * A string that is unique to each project
   * @type {string}
   * @memberof Project
   */
  upid?: string;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ProjectFromJSON(json: any): Project {
  return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    projectId: !exists(json, 'project_id') ? undefined : json['project_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    taskCategoryId: !exists(json, 'task_category_id') ? undefined : json['task_category_id'],
    taskCategory: !exists(json, 'task_category') ? undefined : json['task_category'],
    dataDir: !exists(json, 'data_dir') ? undefined : json['data_dir'],
    labelDir: !exists(json, 'label_dir') ? undefined : json['label_dir'],
    labels: !exists(json, 'labels') ? undefined : (json['labels'] as Array<any>).map(LabelFromJSON),
    labelFormat: !exists(json, 'label_format') ? undefined : json['label_format'],
    created: !exists(json, 'created') ? undefined : json['created'],
    modified: !exists(json, 'modified') ? undefined : json['modified'],
    otherSettings: !exists(json, 'other_settings')
      ? undefined
      : ProjectOtherSettingsFromJSON(json['other_settings']),
    upid: !exists(json, 'upid') ? undefined : json['upid'],
  };
}

export function ProjectToJSON(value?: Project | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    description: value.description,
    task_category_id: value.taskCategoryId,
    data_dir: value.dataDir,
    label_dir: value.labelDir,
    labels: value.labels === undefined ? undefined : (value.labels as Array<any>).map(LabelToJSON),
    label_format: value.labelFormat,
    other_settings: ProjectOtherSettingsToJSON(value.otherSettings),
    upid: value.upid,
  };
}

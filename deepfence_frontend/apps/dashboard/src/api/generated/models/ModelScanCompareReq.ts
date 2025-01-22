/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.3
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface ModelScanCompareReq
 */
export interface ModelScanCompareReq {
    /**
     * 
     * @type {string}
     * @memberof ModelScanCompareReq
     */
    base_scan_id: string;
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof ModelScanCompareReq
     */
    fields_filter: ReportersFieldsFilters;
    /**
     * 
     * @type {string}
     * @memberof ModelScanCompareReq
     */
    to_scan_id: string;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ModelScanCompareReq
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the ModelScanCompareReq interface.
 */
export function instanceOfModelScanCompareReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "base_scan_id" in value;
    isInstance = isInstance && "fields_filter" in value;
    isInstance = isInstance && "to_scan_id" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function ModelScanCompareReqFromJSON(json: any): ModelScanCompareReq {
    return ModelScanCompareReqFromJSONTyped(json, false);
}

export function ModelScanCompareReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanCompareReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'base_scan_id': json['base_scan_id'],
        'fields_filter': ReportersFieldsFiltersFromJSON(json['fields_filter']),
        'to_scan_id': json['to_scan_id'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function ModelScanCompareReqToJSON(value?: ModelScanCompareReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base_scan_id': value.base_scan_id,
        'fields_filter': ReportersFieldsFiltersToJSON(value.fields_filter),
        'to_scan_id': value.to_scan_id,
        'window': ModelFetchWindowToJSON(value.window),
    };
}


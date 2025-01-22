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
import type { ModelScanInfo } from './ModelScanInfo';
import {
    ModelScanInfoFromJSON,
    ModelScanInfoFromJSONTyped,
    ModelScanInfoToJSON,
} from './ModelScanInfo';

/**
 * 
 * @export
 * @interface ModelScanListResp
 */
export interface ModelScanListResp {
    /**
     * 
     * @type {Array<ModelScanInfo>}
     * @memberof ModelScanListResp
     */
    scans_info: Array<ModelScanInfo> | null;
}

/**
 * Check if a given object implements the ModelScanListResp interface.
 */
export function instanceOfModelScanListResp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "scans_info" in value;

    return isInstance;
}

export function ModelScanListRespFromJSON(json: any): ModelScanListResp {
    return ModelScanListRespFromJSONTyped(json, false);
}

export function ModelScanListRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanListResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scans_info': (json['scans_info'] === null ? null : (json['scans_info'] as Array<any>).map(ModelScanInfoFromJSON)),
    };
}

export function ModelScanListRespToJSON(value?: ModelScanListResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scans_info': (value.scans_info === null ? null : (value.scans_info as Array<any>).map(ModelScanInfoToJSON)),
    };
}


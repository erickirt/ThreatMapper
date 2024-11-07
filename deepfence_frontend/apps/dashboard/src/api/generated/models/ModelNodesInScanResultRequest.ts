/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelNodesInScanResultRequest
 */
export interface ModelNodesInScanResultRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelNodesInScanResultRequest
     */
    result_ids: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelNodesInScanResultRequest
     */
    scan_type: ModelNodesInScanResultRequestScanTypeEnum;
}


/**
 * @export
 */
export const ModelNodesInScanResultRequestScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type ModelNodesInScanResultRequestScanTypeEnum = typeof ModelNodesInScanResultRequestScanTypeEnum[keyof typeof ModelNodesInScanResultRequestScanTypeEnum];


/**
 * Check if a given object implements the ModelNodesInScanResultRequest interface.
 */
export function instanceOfModelNodesInScanResultRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result_ids" in value;
    isInstance = isInstance && "scan_type" in value;

    return isInstance;
}

export function ModelNodesInScanResultRequestFromJSON(json: any): ModelNodesInScanResultRequest {
    return ModelNodesInScanResultRequestFromJSONTyped(json, false);
}

export function ModelNodesInScanResultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelNodesInScanResultRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result_ids': json['result_ids'],
        'scan_type': json['scan_type'],
    };
}

export function ModelNodesInScanResultRequestToJSON(value?: ModelNodesInScanResultRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result_ids': value.result_ids,
        'scan_type': value.scan_type,
    };
}


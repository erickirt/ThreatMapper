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
/**
 * 
 * @export
 * @interface ModelScanResultsActionRequest
 */
export interface ModelScanResultsActionRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof ModelScanResultsActionRequest
     */
    integration_ids?: Array<number> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModelScanResultsActionRequest
     */
    notify_individual?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanResultsActionRequest
     */
    result_ids: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsActionRequest
     */
    scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsActionRequest
     */
    scan_type: ModelScanResultsActionRequestScanTypeEnum;
}


/**
 * @export
 */
export const ModelScanResultsActionRequestScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type ModelScanResultsActionRequestScanTypeEnum = typeof ModelScanResultsActionRequestScanTypeEnum[keyof typeof ModelScanResultsActionRequestScanTypeEnum];


/**
 * Check if a given object implements the ModelScanResultsActionRequest interface.
 */
export function instanceOfModelScanResultsActionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result_ids" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "scan_type" in value;

    return isInstance;
}

export function ModelScanResultsActionRequestFromJSON(json: any): ModelScanResultsActionRequest {
    return ModelScanResultsActionRequestFromJSONTyped(json, false);
}

export function ModelScanResultsActionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanResultsActionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'integration_ids': !exists(json, 'integration_ids') ? undefined : json['integration_ids'],
        'notify_individual': !exists(json, 'notify_individual') ? undefined : json['notify_individual'],
        'result_ids': json['result_ids'],
        'scan_id': json['scan_id'],
        'scan_type': json['scan_type'],
    };
}

export function ModelScanResultsActionRequestToJSON(value?: ModelScanResultsActionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'integration_ids': value.integration_ids,
        'notify_individual': value.notify_individual,
        'result_ids': value.result_ids,
        'scan_id': value.scan_id,
        'scan_type': value.scan_type,
    };
}


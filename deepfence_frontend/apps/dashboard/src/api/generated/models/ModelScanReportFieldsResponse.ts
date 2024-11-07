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
 * @interface ModelScanReportFieldsResponse
 */
export interface ModelScanReportFieldsResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanReportFieldsResponse
     */
    compliance?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanReportFieldsResponse
     */
    malware?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanReportFieldsResponse
     */
    secret?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanReportFieldsResponse
     */
    vulnerability?: Array<string> | null;
}

/**
 * Check if a given object implements the ModelScanReportFieldsResponse interface.
 */
export function instanceOfModelScanReportFieldsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelScanReportFieldsResponseFromJSON(json: any): ModelScanReportFieldsResponse {
    return ModelScanReportFieldsResponseFromJSONTyped(json, false);
}

export function ModelScanReportFieldsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanReportFieldsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance': !exists(json, 'compliance') ? undefined : json['compliance'],
        'malware': !exists(json, 'malware') ? undefined : json['malware'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'vulnerability': !exists(json, 'vulnerability') ? undefined : json['vulnerability'],
    };
}

export function ModelScanReportFieldsResponseToJSON(value?: ModelScanReportFieldsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance': value.compliance,
        'malware': value.malware,
        'secret': value.secret,
        'vulnerability': value.vulnerability,
    };
}


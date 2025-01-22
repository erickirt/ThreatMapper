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
import type { ModelCloudNodeComplianceControl } from './ModelCloudNodeComplianceControl';
import {
    ModelCloudNodeComplianceControlFromJSON,
    ModelCloudNodeComplianceControlFromJSONTyped,
    ModelCloudNodeComplianceControlToJSON,
} from './ModelCloudNodeComplianceControl';

/**
 * 
 * @export
 * @interface ModelCloudNodeControlResp
 */
export interface ModelCloudNodeControlResp {
    /**
     * 
     * @type {Array<ModelCloudNodeComplianceControl>}
     * @memberof ModelCloudNodeControlResp
     */
    controls?: Array<ModelCloudNodeComplianceControl> | null;
}

/**
 * Check if a given object implements the ModelCloudNodeControlResp interface.
 */
export function instanceOfModelCloudNodeControlResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelCloudNodeControlRespFromJSON(json: any): ModelCloudNodeControlResp {
    return ModelCloudNodeControlRespFromJSONTyped(json, false);
}

export function ModelCloudNodeControlRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudNodeControlResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controls': !exists(json, 'controls') ? undefined : (json['controls'] === null ? null : (json['controls'] as Array<any>).map(ModelCloudNodeComplianceControlFromJSON)),
    };
}

export function ModelCloudNodeControlRespToJSON(value?: ModelCloudNodeControlResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controls': value.controls === undefined ? undefined : (value.controls === null ? null : (value.controls as Array<any>).map(ModelCloudNodeComplianceControlToJSON)),
    };
}


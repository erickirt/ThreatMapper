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
import type { ModelComplianceScanResultControlGroup } from './ModelComplianceScanResultControlGroup';
import {
    ModelComplianceScanResultControlGroupFromJSON,
    ModelComplianceScanResultControlGroupFromJSONTyped,
    ModelComplianceScanResultControlGroupToJSON,
} from './ModelComplianceScanResultControlGroup';

/**
 * 
 * @export
 * @interface ModelComplianceScanResultsGroupResp
 */
export interface ModelComplianceScanResultsGroupResp {
    /**
     * 
     * @type {{ [key: string]: ModelComplianceScanResultControlGroup; }}
     * @memberof ModelComplianceScanResultsGroupResp
     */
    groups?: { [key: string]: ModelComplianceScanResultControlGroup; } | null;
}

/**
 * Check if a given object implements the ModelComplianceScanResultsGroupResp interface.
 */
export function instanceOfModelComplianceScanResultsGroupResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelComplianceScanResultsGroupRespFromJSON(json: any): ModelComplianceScanResultsGroupResp {
    return ModelComplianceScanResultsGroupRespFromJSONTyped(json, false);
}

export function ModelComplianceScanResultsGroupRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelComplianceScanResultsGroupResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': !exists(json, 'groups') ? undefined : (json['groups'] === null ? null : mapValues(json['groups'], ModelComplianceScanResultControlGroupFromJSON)),
    };
}

export function ModelComplianceScanResultsGroupRespToJSON(value?: ModelComplianceScanResultsGroupResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': value.groups === undefined ? undefined : (value.groups === null ? null : mapValues(value.groups, ModelComplianceScanResultControlGroupToJSON)),
    };
}


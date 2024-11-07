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
 * @interface ModelComplianceScanResultControlGroup
 */
export interface ModelComplianceScanResultControlGroup {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelComplianceScanResultControlGroup
     */
    benchmark_types?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ModelComplianceScanResultControlGroup
     */
    counts?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof ModelComplianceScanResultControlGroup
     */
    problem_title?: string;
}

/**
 * Check if a given object implements the ModelComplianceScanResultControlGroup interface.
 */
export function instanceOfModelComplianceScanResultControlGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelComplianceScanResultControlGroupFromJSON(json: any): ModelComplianceScanResultControlGroup {
    return ModelComplianceScanResultControlGroupFromJSONTyped(json, false);
}

export function ModelComplianceScanResultControlGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelComplianceScanResultControlGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'benchmark_types': !exists(json, 'benchmark_types') ? undefined : json['benchmark_types'],
        'counts': !exists(json, 'counts') ? undefined : json['counts'],
        'problem_title': !exists(json, 'problem_title') ? undefined : json['problem_title'],
    };
}

export function ModelComplianceScanResultControlGroupToJSON(value?: ModelComplianceScanResultControlGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'benchmark_types': value.benchmark_types,
        'counts': value.counts,
        'problem_title': value.problem_title,
    };
}


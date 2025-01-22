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
 * @interface ModelSecretScanResultRules
 */
export interface ModelSecretScanResultRules {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelSecretScanResultRules
     */
    rules: Array<string> | null;
}

/**
 * Check if a given object implements the ModelSecretScanResultRules interface.
 */
export function instanceOfModelSecretScanResultRules(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rules" in value;

    return isInstance;
}

export function ModelSecretScanResultRulesFromJSON(json: any): ModelSecretScanResultRules {
    return ModelSecretScanResultRulesFromJSONTyped(json, false);
}

export function ModelSecretScanResultRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSecretScanResultRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rules': json['rules'],
    };
}

export function ModelSecretScanResultRulesToJSON(value?: ModelSecretScanResultRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rules': value.rules,
    };
}


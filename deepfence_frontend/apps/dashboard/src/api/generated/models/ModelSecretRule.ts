/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.2.1
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
 * @interface ModelSecretRule
 */
export interface ModelSecretRule {
    /**
     * 
     * @type {number}
     * @memberof ModelSecretRule
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretRule
     */
    level: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelSecretRule
     */
    masked: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretRule
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretRule
     */
    part?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretRule
     */
    signature_to_match?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelSecretRule
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelSecretRule interface.
 */
export function instanceOfModelSecretRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "level" in value;
    isInstance = isInstance && "masked" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelSecretRuleFromJSON(json: any): ModelSecretRule {
    return ModelSecretRuleFromJSONTyped(json, false);
}

export function ModelSecretRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSecretRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'level': json['level'],
        'masked': json['masked'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'part': !exists(json, 'part') ? undefined : json['part'],
        'signature_to_match': !exists(json, 'signature_to_match') ? undefined : json['signature_to_match'],
        'updated_at': json['updated_at'],
    };
}

export function ModelSecretRuleToJSON(value?: ModelSecretRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'level': value.level,
        'masked': value.masked,
        'name': value.name,
        'part': value.part,
        'signature_to_match': value.signature_to_match,
        'updated_at': value.updated_at,
    };
}


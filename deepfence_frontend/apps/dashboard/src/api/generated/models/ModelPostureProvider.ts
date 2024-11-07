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
 * @interface ModelPostureProvider
 */
export interface ModelPostureProvider {
    /**
     * 
     * @type {number}
     * @memberof ModelPostureProvider
     */
    compliance_percentage?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelPostureProvider
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelPostureProvider
     */
    node_count?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelPostureProvider
     */
    node_count_inactive?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelPostureProvider
     */
    node_label?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelPostureProvider
     */
    resource_count?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelPostureProvider
     */
    scan_count?: number;
}

/**
 * Check if a given object implements the ModelPostureProvider interface.
 */
export function instanceOfModelPostureProvider(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelPostureProviderFromJSON(json: any): ModelPostureProvider {
    return ModelPostureProviderFromJSONTyped(json, false);
}

export function ModelPostureProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelPostureProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_percentage': !exists(json, 'compliance_percentage') ? undefined : json['compliance_percentage'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'node_count': !exists(json, 'node_count') ? undefined : json['node_count'],
        'node_count_inactive': !exists(json, 'node_count_inactive') ? undefined : json['node_count_inactive'],
        'node_label': !exists(json, 'node_label') ? undefined : json['node_label'],
        'resource_count': !exists(json, 'resource_count') ? undefined : json['resource_count'],
        'scan_count': !exists(json, 'scan_count') ? undefined : json['scan_count'],
    };
}

export function ModelPostureProviderToJSON(value?: ModelPostureProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_percentage': value.compliance_percentage,
        'name': value.name,
        'node_count': value.node_count,
        'node_count_inactive': value.node_count_inactive,
        'node_label': value.node_label,
        'resource_count': value.resource_count,
        'scan_count': value.scan_count,
    };
}


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
 * @interface ModelBasicNode
 */
export interface ModelBasicNode {
    /**
     * 
     * @type {boolean}
     * @memberof ModelBasicNode
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelBasicNode
     */
    host_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelBasicNode
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelBasicNode
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelBasicNode
     */
    node_type: string;
}

/**
 * Check if a given object implements the ModelBasicNode interface.
 */
export function instanceOfModelBasicNode(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_type" in value;

    return isInstance;
}

export function ModelBasicNodeFromJSON(json: any): ModelBasicNode {
    return ModelBasicNodeFromJSONTyped(json, false);
}

export function ModelBasicNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelBasicNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': json['active'],
        'host_name': json['host_name'],
        'name': json['name'],
        'node_id': json['node_id'],
        'node_type': json['node_type'],
    };
}

export function ModelBasicNodeToJSON(value?: ModelBasicNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'host_name': value.host_name,
        'name': value.name,
        'node_id': value.node_id,
        'node_type': value.node_type,
    };
}


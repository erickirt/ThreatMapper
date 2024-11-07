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
 * @interface SearchNodeCountResp
 */
export interface SearchNodeCountResp {
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    cloud_provider: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    container: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    container_image: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    host: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    kubernetes_cluster: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    namespace: number;
    /**
     * 
     * @type {number}
     * @memberof SearchNodeCountResp
     */
    pod: number;
}

/**
 * Check if a given object implements the SearchNodeCountResp interface.
 */
export function instanceOfSearchNodeCountResp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "container" in value;
    isInstance = isInstance && "container_image" in value;
    isInstance = isInstance && "host" in value;
    isInstance = isInstance && "kubernetes_cluster" in value;
    isInstance = isInstance && "namespace" in value;
    isInstance = isInstance && "pod" in value;

    return isInstance;
}

export function SearchNodeCountRespFromJSON(json: any): SearchNodeCountResp {
    return SearchNodeCountRespFromJSONTyped(json, false);
}

export function SearchNodeCountRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchNodeCountResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_provider': json['cloud_provider'],
        'container': json['container'],
        'container_image': json['container_image'],
        'host': json['host'],
        'kubernetes_cluster': json['kubernetes_cluster'],
        'namespace': json['namespace'],
        'pod': json['pod'],
    };
}

export function SearchNodeCountRespToJSON(value?: SearchNodeCountResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_provider': value.cloud_provider,
        'container': value.container,
        'container_image': value.container_image,
        'host': value.host,
        'kubernetes_cluster': value.kubernetes_cluster,
        'namespace': value.namespace,
        'pod': value.pod,
    };
}


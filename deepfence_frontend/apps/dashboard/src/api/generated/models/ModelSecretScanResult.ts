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
import type { ModelSecret } from './ModelSecret';
import {
    ModelSecretFromJSON,
    ModelSecretFromJSONTyped,
    ModelSecretToJSON,
} from './ModelSecret';

/**
 * 
 * @export
 * @interface ModelSecretScanResult
 */
export interface ModelSecretScanResult {
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    cloud_account_id: string;
    /**
     * 
     * @type {number}
     * @memberof ModelSecretScanResult
     */
    created_at: number;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    docker_container_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    docker_image_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    host_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    kubernetes_cluster_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    node_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelSecretScanResult
     */
    scan_id: string;
    /**
     * 
     * @type {Array<ModelSecret>}
     * @memberof ModelSecretScanResult
     */
    secrets: Array<ModelSecret> | null;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ModelSecretScanResult
     */
    severity_counts: { [key: string]: number; } | null;
    /**
     * 
     * @type {number}
     * @memberof ModelSecretScanResult
     */
    updated_at: number;
}

/**
 * Check if a given object implements the ModelSecretScanResult interface.
 */
export function instanceOfModelSecretScanResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_account_id" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "docker_container_name" in value;
    isInstance = isInstance && "docker_image_name" in value;
    isInstance = isInstance && "host_name" in value;
    isInstance = isInstance && "kubernetes_cluster_name" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "secrets" in value;
    isInstance = isInstance && "severity_counts" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function ModelSecretScanResultFromJSON(json: any): ModelSecretScanResult {
    return ModelSecretScanResultFromJSONTyped(json, false);
}

export function ModelSecretScanResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSecretScanResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_account_id': json['cloud_account_id'],
        'created_at': json['created_at'],
        'docker_container_name': json['docker_container_name'],
        'docker_image_name': json['docker_image_name'],
        'host_name': json['host_name'],
        'kubernetes_cluster_name': json['kubernetes_cluster_name'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'node_type': json['node_type'],
        'scan_id': json['scan_id'],
        'secrets': (json['secrets'] === null ? null : (json['secrets'] as Array<any>).map(ModelSecretFromJSON)),
        'severity_counts': json['severity_counts'],
        'updated_at': json['updated_at'],
    };
}

export function ModelSecretScanResultToJSON(value?: ModelSecretScanResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_account_id': value.cloud_account_id,
        'created_at': value.created_at,
        'docker_container_name': value.docker_container_name,
        'docker_image_name': value.docker_image_name,
        'host_name': value.host_name,
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'node_type': value.node_type,
        'scan_id': value.scan_id,
        'secrets': (value.secrets === null ? null : (value.secrets as Array<any>).map(ModelSecretToJSON)),
        'severity_counts': value.severity_counts,
        'updated_at': value.updated_at,
    };
}


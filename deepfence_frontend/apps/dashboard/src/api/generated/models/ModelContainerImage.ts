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
import type { ModelContainer } from './ModelContainer';
import {
    ModelContainerFromJSON,
    ModelContainerFromJSONTyped,
    ModelContainerToJSON,
} from './ModelContainer';

/**
 * 
 * @export
 * @interface ModelContainerImage
 */
export interface ModelContainerImage {
    /**
     * 
     * @type {Array<ModelContainer>}
     * @memberof ModelContainerImage
     */
    containers: Array<ModelContainer> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_created_at: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_size: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_tag: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelContainerImage
     */
    docker_image_tag_list: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_virtual_size: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    image_node_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelContainerImage
     */
    is_deepfence_system: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    malware_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    malware_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    malwares_count: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelContainerImage
     */
    metadata?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    secret_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    secret_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    vulnerabilities_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    vulnerability_latest_scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    vulnerability_scan_status: string;
}

/**
 * Check if a given object implements the ModelContainerImage interface.
 */
export function instanceOfModelContainerImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "containers" in value;
    isInstance = isInstance && "docker_image_created_at" in value;
    isInstance = isInstance && "docker_image_id" in value;
    isInstance = isInstance && "docker_image_name" in value;
    isInstance = isInstance && "docker_image_size" in value;
    isInstance = isInstance && "docker_image_tag" in value;
    isInstance = isInstance && "docker_image_tag_list" in value;
    isInstance = isInstance && "docker_image_virtual_size" in value;
    isInstance = isInstance && "image_node_id" in value;
    isInstance = isInstance && "is_deepfence_system" in value;
    isInstance = isInstance && "malware_latest_scan_id" in value;
    isInstance = isInstance && "malware_scan_status" in value;
    isInstance = isInstance && "malwares_count" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "secret_latest_scan_id" in value;
    isInstance = isInstance && "secret_scan_status" in value;
    isInstance = isInstance && "secrets_count" in value;
    isInstance = isInstance && "vulnerabilities_count" in value;
    isInstance = isInstance && "vulnerability_latest_scan_id" in value;
    isInstance = isInstance && "vulnerability_scan_status" in value;

    return isInstance;
}

export function ModelContainerImageFromJSON(json: any): ModelContainerImage {
    return ModelContainerImageFromJSONTyped(json, false);
}

export function ModelContainerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelContainerImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containers': (json['containers'] === null ? null : (json['containers'] as Array<any>).map(ModelContainerFromJSON)),
        'docker_image_created_at': json['docker_image_created_at'],
        'docker_image_id': json['docker_image_id'],
        'docker_image_name': json['docker_image_name'],
        'docker_image_size': json['docker_image_size'],
        'docker_image_tag': json['docker_image_tag'],
        'docker_image_tag_list': json['docker_image_tag_list'],
        'docker_image_virtual_size': json['docker_image_virtual_size'],
        'image_node_id': json['image_node_id'],
        'is_deepfence_system': json['is_deepfence_system'],
        'malware_latest_scan_id': json['malware_latest_scan_id'],
        'malware_scan_status': json['malware_scan_status'],
        'malwares_count': json['malwares_count'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'secret_latest_scan_id': json['secret_latest_scan_id'],
        'secret_scan_status': json['secret_scan_status'],
        'secrets_count': json['secrets_count'],
        'vulnerabilities_count': json['vulnerabilities_count'],
        'vulnerability_latest_scan_id': json['vulnerability_latest_scan_id'],
        'vulnerability_scan_status': json['vulnerability_scan_status'],
    };
}

export function ModelContainerImageToJSON(value?: ModelContainerImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containers': (value.containers === null ? null : (value.containers as Array<any>).map(ModelContainerToJSON)),
        'docker_image_created_at': value.docker_image_created_at,
        'docker_image_id': value.docker_image_id,
        'docker_image_name': value.docker_image_name,
        'docker_image_size': value.docker_image_size,
        'docker_image_tag': value.docker_image_tag,
        'docker_image_tag_list': value.docker_image_tag_list,
        'docker_image_virtual_size': value.docker_image_virtual_size,
        'image_node_id': value.image_node_id,
        'is_deepfence_system': value.is_deepfence_system,
        'malware_latest_scan_id': value.malware_latest_scan_id,
        'malware_scan_status': value.malware_scan_status,
        'malwares_count': value.malwares_count,
        'metadata': value.metadata,
        'node_id': value.node_id,
        'node_name': value.node_name,
        'secret_latest_scan_id': value.secret_latest_scan_id,
        'secret_scan_status': value.secret_scan_status,
        'secrets_count': value.secrets_count,
        'vulnerabilities_count': value.vulnerabilities_count,
        'vulnerability_latest_scan_id': value.vulnerability_latest_scan_id,
        'vulnerability_scan_status': value.vulnerability_scan_status,
    };
}


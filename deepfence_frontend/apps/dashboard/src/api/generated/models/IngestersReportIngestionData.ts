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
 * @interface IngestersReportIngestionData
 */
export interface IngestersReportIngestionData {
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    container_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    container_edges_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    container_image_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    container_image_edge_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    container_process_edge_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    endpoint_edges_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    host_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    hosts: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    kubernetes_cluster_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    kubernetes_cluster_edge_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {number}
     * @memberof IngestersReportIngestionData
     */
    num_merged: number;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    pod_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    pod_edges_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    pod_host_edges_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    process_batch: Array<{ [key: string]: any; }> | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof IngestersReportIngestionData
     */
    process_edges_batch: Array<{ [key: string]: any; }> | null;
}

/**
 * Check if a given object implements the IngestersReportIngestionData interface.
 */
export function instanceOfIngestersReportIngestionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "container_batch" in value;
    isInstance = isInstance && "container_edges_batch" in value;
    isInstance = isInstance && "container_image_batch" in value;
    isInstance = isInstance && "container_image_edge_batch" in value;
    isInstance = isInstance && "container_process_edge_batch" in value;
    isInstance = isInstance && "endpoint_edges_batch" in value;
    isInstance = isInstance && "host_batch" in value;
    isInstance = isInstance && "hosts" in value;
    isInstance = isInstance && "kubernetes_cluster_batch" in value;
    isInstance = isInstance && "kubernetes_cluster_edge_batch" in value;
    isInstance = isInstance && "num_merged" in value;
    isInstance = isInstance && "pod_batch" in value;
    isInstance = isInstance && "pod_edges_batch" in value;
    isInstance = isInstance && "pod_host_edges_batch" in value;
    isInstance = isInstance && "process_batch" in value;
    isInstance = isInstance && "process_edges_batch" in value;

    return isInstance;
}

export function IngestersReportIngestionDataFromJSON(json: any): IngestersReportIngestionData {
    return IngestersReportIngestionDataFromJSONTyped(json, false);
}

export function IngestersReportIngestionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersReportIngestionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'container_batch': json['container_batch'],
        'container_edges_batch': json['container_edges_batch'],
        'container_image_batch': json['container_image_batch'],
        'container_image_edge_batch': json['container_image_edge_batch'],
        'container_process_edge_batch': json['container_process_edge_batch'],
        'endpoint_edges_batch': json['endpoint_edges_batch'],
        'host_batch': json['host_batch'],
        'hosts': json['hosts'],
        'kubernetes_cluster_batch': json['kubernetes_cluster_batch'],
        'kubernetes_cluster_edge_batch': json['kubernetes_cluster_edge_batch'],
        'num_merged': json['num_merged'],
        'pod_batch': json['pod_batch'],
        'pod_edges_batch': json['pod_edges_batch'],
        'pod_host_edges_batch': json['pod_host_edges_batch'],
        'process_batch': json['process_batch'],
        'process_edges_batch': json['process_edges_batch'],
    };
}

export function IngestersReportIngestionDataToJSON(value?: IngestersReportIngestionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'container_batch': value.container_batch,
        'container_edges_batch': value.container_edges_batch,
        'container_image_batch': value.container_image_batch,
        'container_image_edge_batch': value.container_image_edge_batch,
        'container_process_edge_batch': value.container_process_edge_batch,
        'endpoint_edges_batch': value.endpoint_edges_batch,
        'host_batch': value.host_batch,
        'hosts': value.hosts,
        'kubernetes_cluster_batch': value.kubernetes_cluster_batch,
        'kubernetes_cluster_edge_batch': value.kubernetes_cluster_edge_batch,
        'num_merged': value.num_merged,
        'pod_batch': value.pod_batch,
        'pod_edges_batch': value.pod_edges_batch,
        'pod_host_edges_batch': value.pod_host_edges_batch,
        'process_batch': value.process_batch,
        'process_edges_batch': value.process_edges_batch,
    };
}


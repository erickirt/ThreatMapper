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
 * @interface ModelSummary
 */
export interface ModelSummary {
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    images?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    registries?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    repositories?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    scans_complete?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    scans_in_progress?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelSummary
     */
    scans_total?: number;
}

/**
 * Check if a given object implements the ModelSummary interface.
 */
export function instanceOfModelSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelSummaryFromJSON(json: any): ModelSummary {
    return ModelSummaryFromJSONTyped(json, false);
}

export function ModelSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'images': !exists(json, 'images') ? undefined : json['images'],
        'registries': !exists(json, 'registries') ? undefined : json['registries'],
        'repositories': !exists(json, 'repositories') ? undefined : json['repositories'],
        'scans_complete': !exists(json, 'scans_complete') ? undefined : json['scans_complete'],
        'scans_in_progress': !exists(json, 'scans_in_progress') ? undefined : json['scans_in_progress'],
        'scans_total': !exists(json, 'scans_total') ? undefined : json['scans_total'],
    };
}

export function ModelSummaryToJSON(value?: ModelSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'images': value.images,
        'registries': value.registries,
        'repositories': value.repositories,
        'scans_complete': value.scans_complete,
        'scans_in_progress': value.scans_in_progress,
        'scans_total': value.scans_total,
    };
}


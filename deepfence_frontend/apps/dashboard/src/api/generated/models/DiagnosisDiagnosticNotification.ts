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
 * @interface DiagnosisDiagnosticNotification
 */
export interface DiagnosisDiagnosticNotification {
    /**
     * 
     * @type {string}
     * @memberof DiagnosisDiagnosticNotification
     */
    content?: string;
    /**
     * 
     * @type {any}
     * @memberof DiagnosisDiagnosticNotification
     */
    expiry_in_secs?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DiagnosisDiagnosticNotification
     */
    follow_url?: any | null;
    /**
     * 
     * @type {string}
     * @memberof DiagnosisDiagnosticNotification
     */
    source_application_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DiagnosisDiagnosticNotification
     */
    updated_at?: string;
}

/**
 * Check if a given object implements the DiagnosisDiagnosticNotification interface.
 */
export function instanceOfDiagnosisDiagnosticNotification(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosisDiagnosticNotificationFromJSON(json: any): DiagnosisDiagnosticNotification {
    return DiagnosisDiagnosticNotificationFromJSONTyped(json, false);
}

export function DiagnosisDiagnosticNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosisDiagnosticNotification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'expiry_in_secs': !exists(json, 'expiry_in_secs') ? undefined : json['expiry_in_secs'],
        'follow_url': !exists(json, 'follow_url') ? undefined : json['follow_url'],
        'source_application_id': !exists(json, 'source_application_id') ? undefined : json['source_application_id'],
        'updated_at': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function DiagnosisDiagnosticNotificationToJSON(value?: DiagnosisDiagnosticNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'expiry_in_secs': value.expiry_in_secs,
        'follow_url': value.follow_url,
        'source_application_id': value.source_application_id,
        'updated_at': value.updated_at,
    };
}


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
 * @interface ApiDocsBadRequestResponse
 */
export interface ApiDocsBadRequestResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApiDocsBadRequestResponse
     */
    error_fields?: { [key: string]: string; } | null;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof ApiDocsBadRequestResponse
     */
    error_index?: { [key: string]: Array<number>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ApiDocsBadRequestResponse
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiDocsBadRequestResponse
     */
    success?: boolean;
}

/**
 * Check if a given object implements the ApiDocsBadRequestResponse interface.
 */
export function instanceOfApiDocsBadRequestResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiDocsBadRequestResponseFromJSON(json: any): ApiDocsBadRequestResponse {
    return ApiDocsBadRequestResponseFromJSONTyped(json, false);
}

export function ApiDocsBadRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiDocsBadRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error_fields': !exists(json, 'error_fields') ? undefined : json['error_fields'],
        'error_index': !exists(json, 'error_index') ? undefined : json['error_index'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function ApiDocsBadRequestResponseToJSON(value?: ApiDocsBadRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_fields': value.error_fields,
        'error_index': value.error_index,
        'message': value.message,
        'success': value.success,
    };
}


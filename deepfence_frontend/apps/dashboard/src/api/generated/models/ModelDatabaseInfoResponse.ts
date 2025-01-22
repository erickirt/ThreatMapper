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
 * @interface ModelDatabaseInfoResponse
 */
export interface ModelDatabaseInfoResponse {
    /**
     * 
     * @type {Date}
     * @memberof ModelDatabaseInfoResponse
     */
    malware_rules_updated_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ModelDatabaseInfoResponse
     */
    posture_controls_updated_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ModelDatabaseInfoResponse
     */
    secrets_rules_updated_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ModelDatabaseInfoResponse
     */
    vulnerability_db_updated_at?: Date;
}

/**
 * Check if a given object implements the ModelDatabaseInfoResponse interface.
 */
export function instanceOfModelDatabaseInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelDatabaseInfoResponseFromJSON(json: any): ModelDatabaseInfoResponse {
    return ModelDatabaseInfoResponseFromJSONTyped(json, false);
}

export function ModelDatabaseInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDatabaseInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'malware_rules_updated_at': !exists(json, 'malware_rules_updated_at') ? undefined : (new Date(json['malware_rules_updated_at'])),
        'posture_controls_updated_at': !exists(json, 'posture_controls_updated_at') ? undefined : (new Date(json['posture_controls_updated_at'])),
        'secrets_rules_updated_at': !exists(json, 'secrets_rules_updated_at') ? undefined : (new Date(json['secrets_rules_updated_at'])),
        'vulnerability_db_updated_at': !exists(json, 'vulnerability_db_updated_at') ? undefined : (new Date(json['vulnerability_db_updated_at'])),
    };
}

export function ModelDatabaseInfoResponseToJSON(value?: ModelDatabaseInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'malware_rules_updated_at': value.malware_rules_updated_at === undefined ? undefined : (value.malware_rules_updated_at.toISOString()),
        'posture_controls_updated_at': value.posture_controls_updated_at === undefined ? undefined : (value.posture_controls_updated_at.toISOString()),
        'secrets_rules_updated_at': value.secrets_rules_updated_at === undefined ? undefined : (value.secrets_rules_updated_at.toISOString()),
        'vulnerability_db_updated_at': value.vulnerability_db_updated_at === undefined ? undefined : (value.vulnerability_db_updated_at.toISOString()),
    };
}


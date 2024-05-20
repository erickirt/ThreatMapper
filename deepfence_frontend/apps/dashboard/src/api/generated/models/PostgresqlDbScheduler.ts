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
 * @interface PostgresqlDbScheduler
 */
export interface PostgresqlDbScheduler {
    /**
     * 
     * @type {string}
     * @memberof PostgresqlDbScheduler
     */
    action?: string;
    /**
     * 
     * @type {Date}
     * @memberof PostgresqlDbScheduler
     */
    created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof PostgresqlDbScheduler
     */
    cron_expr?: string;
    /**
     * 
     * @type {string}
     * @memberof PostgresqlDbScheduler
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof PostgresqlDbScheduler
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostgresqlDbScheduler
     */
    is_enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostgresqlDbScheduler
     */
    is_system?: boolean;
    /**
     * 
     * @type {object}
     * @memberof PostgresqlDbScheduler
     */
    last_ran_at?: object;
    /**
     * 
     * @type {any}
     * @memberof PostgresqlDbScheduler
     */
    payload?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PostgresqlDbScheduler
     */
    status?: string;
    /**
     * 
     * @type {Date}
     * @memberof PostgresqlDbScheduler
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the PostgresqlDbScheduler interface.
 */
export function instanceOfPostgresqlDbScheduler(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostgresqlDbSchedulerFromJSON(json: any): PostgresqlDbScheduler {
    return PostgresqlDbSchedulerFromJSONTyped(json, false);
}

export function PostgresqlDbSchedulerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostgresqlDbScheduler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'cron_expr': !exists(json, 'cron_expr') ? undefined : json['cron_expr'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'is_enabled': !exists(json, 'is_enabled') ? undefined : json['is_enabled'],
        'is_system': !exists(json, 'is_system') ? undefined : json['is_system'],
        'last_ran_at': !exists(json, 'last_ran_at') ? undefined : json['last_ran_at'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function PostgresqlDbSchedulerToJSON(value?: PostgresqlDbScheduler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'cron_expr': value.cron_expr,
        'description': value.description,
        'id': value.id,
        'is_enabled': value.is_enabled,
        'is_system': value.is_system,
        'last_ran_at': value.last_ran_at,
        'payload': value.payload,
        'status': value.status,
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


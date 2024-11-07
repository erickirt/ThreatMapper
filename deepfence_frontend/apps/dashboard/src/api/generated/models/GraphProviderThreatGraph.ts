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
import type { GraphThreatNodeInfo } from './GraphThreatNodeInfo';
import {
    GraphThreatNodeInfoFromJSON,
    GraphThreatNodeInfoFromJSONTyped,
    GraphThreatNodeInfoToJSON,
} from './GraphThreatNodeInfo';

/**
 * 
 * @export
 * @interface GraphProviderThreatGraph
 */
export interface GraphProviderThreatGraph {
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    cloud_compliance_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    cloud_warn_alarm_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    compliance_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    exploitable_secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    exploitable_vulnerabilities_count: number;
    /**
     * 
     * @type {Array<GraphThreatNodeInfo>}
     * @memberof GraphProviderThreatGraph
     */
    resources: Array<GraphThreatNodeInfo> | null;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    vulnerability_count: number;
    /**
     * 
     * @type {number}
     * @memberof GraphProviderThreatGraph
     */
    warn_alarm_count: number;
}

/**
 * Check if a given object implements the GraphProviderThreatGraph interface.
 */
export function instanceOfGraphProviderThreatGraph(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_compliance_count" in value;
    isInstance = isInstance && "cloud_warn_alarm_count" in value;
    isInstance = isInstance && "compliance_count" in value;
    isInstance = isInstance && "exploitable_secrets_count" in value;
    isInstance = isInstance && "exploitable_vulnerabilities_count" in value;
    isInstance = isInstance && "resources" in value;
    isInstance = isInstance && "secrets_count" in value;
    isInstance = isInstance && "vulnerability_count" in value;
    isInstance = isInstance && "warn_alarm_count" in value;

    return isInstance;
}

export function GraphProviderThreatGraphFromJSON(json: any): GraphProviderThreatGraph {
    return GraphProviderThreatGraphFromJSONTyped(json, false);
}

export function GraphProviderThreatGraphFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphProviderThreatGraph {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_compliance_count': json['cloud_compliance_count'],
        'cloud_warn_alarm_count': json['cloud_warn_alarm_count'],
        'compliance_count': json['compliance_count'],
        'exploitable_secrets_count': json['exploitable_secrets_count'],
        'exploitable_vulnerabilities_count': json['exploitable_vulnerabilities_count'],
        'resources': (json['resources'] === null ? null : (json['resources'] as Array<any>).map(GraphThreatNodeInfoFromJSON)),
        'secrets_count': json['secrets_count'],
        'vulnerability_count': json['vulnerability_count'],
        'warn_alarm_count': json['warn_alarm_count'],
    };
}

export function GraphProviderThreatGraphToJSON(value?: GraphProviderThreatGraph | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_compliance_count': value.cloud_compliance_count,
        'cloud_warn_alarm_count': value.cloud_warn_alarm_count,
        'compliance_count': value.compliance_count,
        'exploitable_secrets_count': value.exploitable_secrets_count,
        'exploitable_vulnerabilities_count': value.exploitable_vulnerabilities_count,
        'resources': (value.resources === null ? null : (value.resources as Array<any>).map(GraphThreatNodeInfoToJSON)),
        'secrets_count': value.secrets_count,
        'vulnerability_count': value.vulnerability_count,
        'warn_alarm_count': value.warn_alarm_count,
    };
}


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
 * @interface ModelGenerativeAiIntegrationKubernetesPostureRequest
 */
export interface ModelGenerativeAiIntegrationKubernetesPostureRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationKubernetesPostureRequest
     */
    compliance_check_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationKubernetesPostureRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof ModelGenerativeAiIntegrationKubernetesPostureRequest
     */
    integration_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationKubernetesPostureRequest
     */
    query_type: ModelGenerativeAiIntegrationKubernetesPostureRequestQueryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationKubernetesPostureRequest
     */
    remediation_format: ModelGenerativeAiIntegrationKubernetesPostureRequestRemediationFormatEnum;
}


/**
 * @export
 */
export const ModelGenerativeAiIntegrationKubernetesPostureRequestQueryTypeEnum = {
    Remediation: 'remediation'
} as const;
export type ModelGenerativeAiIntegrationKubernetesPostureRequestQueryTypeEnum = typeof ModelGenerativeAiIntegrationKubernetesPostureRequestQueryTypeEnum[keyof typeof ModelGenerativeAiIntegrationKubernetesPostureRequestQueryTypeEnum];

/**
 * @export
 */
export const ModelGenerativeAiIntegrationKubernetesPostureRequestRemediationFormatEnum = {
    All: 'all',
    Cli: 'cli',
    Pulumi: 'pulumi',
    Terraform: 'terraform'
} as const;
export type ModelGenerativeAiIntegrationKubernetesPostureRequestRemediationFormatEnum = typeof ModelGenerativeAiIntegrationKubernetesPostureRequestRemediationFormatEnum[keyof typeof ModelGenerativeAiIntegrationKubernetesPostureRequestRemediationFormatEnum];


/**
 * Check if a given object implements the ModelGenerativeAiIntegrationKubernetesPostureRequest interface.
 */
export function instanceOfModelGenerativeAiIntegrationKubernetesPostureRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compliance_check_type" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "query_type" in value;
    isInstance = isInstance && "remediation_format" in value;

    return isInstance;
}

export function ModelGenerativeAiIntegrationKubernetesPostureRequestFromJSON(json: any): ModelGenerativeAiIntegrationKubernetesPostureRequest {
    return ModelGenerativeAiIntegrationKubernetesPostureRequestFromJSONTyped(json, false);
}

export function ModelGenerativeAiIntegrationKubernetesPostureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerativeAiIntegrationKubernetesPostureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_check_type': json['compliance_check_type'],
        'description': json['description'],
        'integration_id': !exists(json, 'integration_id') ? undefined : json['integration_id'],
        'query_type': json['query_type'],
        'remediation_format': json['remediation_format'],
    };
}

export function ModelGenerativeAiIntegrationKubernetesPostureRequestToJSON(value?: ModelGenerativeAiIntegrationKubernetesPostureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_check_type': value.compliance_check_type,
        'description': value.description,
        'integration_id': value.integration_id,
        'query_type': value.query_type,
        'remediation_format': value.remediation_format,
    };
}


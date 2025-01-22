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
 * @interface UtilsReportOptions
 */
export interface UtilsReportOptions {
    /**
     * 
     * @type {string}
     * @memberof UtilsReportOptions
     */
    sbom_format?: UtilsReportOptionsSbomFormatEnum;
}


/**
 * @export
 */
export const UtilsReportOptionsSbomFormatEnum = {
    SyftJson: 'syft-json',
    CyclonedxJson15: 'cyclonedx-json@1.5',
    SpdxJson22: 'spdx-json@2.2',
    SpdxJson23: 'spdx-json@2.3'
} as const;
export type UtilsReportOptionsSbomFormatEnum = typeof UtilsReportOptionsSbomFormatEnum[keyof typeof UtilsReportOptionsSbomFormatEnum];


/**
 * Check if a given object implements the UtilsReportOptions interface.
 */
export function instanceOfUtilsReportOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UtilsReportOptionsFromJSON(json: any): UtilsReportOptions {
    return UtilsReportOptionsFromJSONTyped(json, false);
}

export function UtilsReportOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtilsReportOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sbom_format': !exists(json, 'sbom_format') ? undefined : json['sbom_format'],
    };
}

export function UtilsReportOptionsToJSON(value?: UtilsReportOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sbom_format': value.sbom_format,
    };
}


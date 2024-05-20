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
import type { ModelSecret } from './ModelSecret';
import {
    ModelSecretFromJSON,
    ModelSecretFromJSONTyped,
    ModelSecretToJSON,
} from './ModelSecret';

/**
 * 
 * @export
 * @interface ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret
 */
export interface ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret {
    /**
     * 
     * @type {Array<ModelSecret>}
     * @memberof ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret
     */
    _new: Array<ModelSecret> | null;
}

/**
 * Check if a given object implements the ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret interface.
 */
export function instanceOfModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_new" in value;

    return isInstance;
}

export function ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretFromJSON(json: any): ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret {
    return ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretFromJSONTyped(json, false);
}

export function ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_new': (json['new'] === null ? null : (json['new'] as Array<any>).map(ModelSecretFromJSON)),
    };
}

export function ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretToJSON(value?: ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'new': (value._new === null ? null : (value._new as Array<any>).map(ModelSecretToJSON)),
    };
}


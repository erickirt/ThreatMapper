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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelScanCompareReq,
  ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudCompliance,
  ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCompliance,
  ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalware,
  ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret,
  ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerability,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelScanCompareReqFromJSON,
    ModelScanCompareReqToJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudComplianceFromJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudComplianceToJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelComplianceFromJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelComplianceToJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalwareFromJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalwareToJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretFromJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretToJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerabilityFromJSON,
    ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerabilityToJSON,
} from '../models';

export interface DiffAddCloudComplianceRequest {
    modelScanCompareReq?: ModelScanCompareReq;
}

export interface DiffAddComplianceRequest {
    modelScanCompareReq?: ModelScanCompareReq;
}

export interface DiffAddMalwareRequest {
    modelScanCompareReq?: ModelScanCompareReq;
}

export interface DiffAddSecretRequest {
    modelScanCompareReq?: ModelScanCompareReq;
}

export interface DiffAddVulnerabilityRequest {
    modelScanCompareReq?: ModelScanCompareReq;
}

/**
 * DiffAddApi - interface
 * 
 * @export
 * @interface DiffAddApiInterface
 */
export interface DiffAddApiInterface {
    /**
     * Get Cloud Compliance Diff between two scans
     * @summary Get Cloud Compliance Diff
     * @param {ModelScanCompareReq} [modelScanCompareReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiffAddApiInterface
     */
    diffAddCloudComplianceRaw(requestParameters: DiffAddCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudCompliance>>;

    /**
     * Get Cloud Compliance Diff between two scans
     * Get Cloud Compliance Diff
     */
    diffAddCloudCompliance(requestParameters: DiffAddCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudCompliance>;

    /**
     * Get Compliance Diff between two scans
     * @summary Get Compliance Diff
     * @param {ModelScanCompareReq} [modelScanCompareReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiffAddApiInterface
     */
    diffAddComplianceRaw(requestParameters: DiffAddComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCompliance>>;

    /**
     * Get Compliance Diff between two scans
     * Get Compliance Diff
     */
    diffAddCompliance(requestParameters: DiffAddComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCompliance>;

    /**
     * Get Malware Diff between two scans
     * @summary Get Malware Diff
     * @param {ModelScanCompareReq} [modelScanCompareReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiffAddApiInterface
     */
    diffAddMalwareRaw(requestParameters: DiffAddMalwareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalware>>;

    /**
     * Get Malware Diff between two scans
     * Get Malware Diff
     */
    diffAddMalware(requestParameters: DiffAddMalwareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalware>;

    /**
     * Get Secret Diff between two scans
     * @summary Get Secret Diff
     * @param {ModelScanCompareReq} [modelScanCompareReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiffAddApiInterface
     */
    diffAddSecretRaw(requestParameters: DiffAddSecretRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret>>;

    /**
     * Get Secret Diff between two scans
     * Get Secret Diff
     */
    diffAddSecret(requestParameters: DiffAddSecretRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret>;

    /**
     * Get Vulnerability Diff between two scans
     * @summary Get Vulnerability Diff
     * @param {ModelScanCompareReq} [modelScanCompareReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiffAddApiInterface
     */
    diffAddVulnerabilityRaw(requestParameters: DiffAddVulnerabilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerability>>;

    /**
     * Get Vulnerability Diff between two scans
     * Get Vulnerability Diff
     */
    diffAddVulnerability(requestParameters: DiffAddVulnerabilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerability>;

}

/**
 * 
 */
export class DiffAddApi extends runtime.BaseAPI implements DiffAddApiInterface {

    /**
     * Get Cloud Compliance Diff between two scans
     * Get Cloud Compliance Diff
     */
    async diffAddCloudComplianceRaw(requestParameters: DiffAddCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudCompliance>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diff-add/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanCompareReqToJSON(requestParameters.modelScanCompareReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudComplianceFromJSON(jsonValue));
    }

    /**
     * Get Cloud Compliance Diff between two scans
     * Get Cloud Compliance Diff
     */
    async diffAddCloudCompliance(requestParameters: DiffAddCloudComplianceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCloudCompliance> {
        const response = await this.diffAddCloudComplianceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Diff between two scans
     * Get Compliance Diff
     */
    async diffAddComplianceRaw(requestParameters: DiffAddComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCompliance>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diff-add/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanCompareReqToJSON(requestParameters.modelScanCompareReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelComplianceFromJSON(jsonValue));
    }

    /**
     * Get Compliance Diff between two scans
     * Get Compliance Diff
     */
    async diffAddCompliance(requestParameters: DiffAddComplianceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelCompliance> {
        const response = await this.diffAddComplianceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Malware Diff between two scans
     * Get Malware Diff
     */
    async diffAddMalwareRaw(requestParameters: DiffAddMalwareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalware>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diff-add/malware`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanCompareReqToJSON(requestParameters.modelScanCompareReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalwareFromJSON(jsonValue));
    }

    /**
     * Get Malware Diff between two scans
     * Get Malware Diff
     */
    async diffAddMalware(requestParameters: DiffAddMalwareRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelMalware> {
        const response = await this.diffAddMalwareRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Secret Diff between two scans
     * Get Secret Diff
     */
    async diffAddSecretRaw(requestParameters: DiffAddSecretRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diff-add/secret`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanCompareReqToJSON(requestParameters.modelScanCompareReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecretFromJSON(jsonValue));
    }

    /**
     * Get Secret Diff between two scans
     * Get Secret Diff
     */
    async diffAddSecret(requestParameters: DiffAddSecretRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelSecret> {
        const response = await this.diffAddSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Vulnerability Diff between two scans
     * Get Vulnerability Diff
     */
    async diffAddVulnerabilityRaw(requestParameters: DiffAddVulnerabilityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerability>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diff-add/vulnerability`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanCompareReqToJSON(requestParameters.modelScanCompareReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerabilityFromJSON(jsonValue));
    }

    /**
     * Get Vulnerability Diff between two scans
     * Get Vulnerability Diff
     */
    async diffAddVulnerability(requestParameters: DiffAddVulnerabilityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanCompareResGithubComDeepfenceThreatMapperDeepfenceServerModelVulnerability> {
        const response = await this.diffAddVulnerabilityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

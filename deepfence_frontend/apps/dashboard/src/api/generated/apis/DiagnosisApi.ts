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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  DiagnosisDiagnosticLogsStatus,
  DiagnosisDiagnosticNotification,
  DiagnosisGenerateAgentDiagnosticLogsRequest,
  DiagnosisGenerateCloudScannerDiagnosticLogsRequest,
  DiagnosisGenerateConsoleDiagnosticLogsRequest,
  DiagnosisGetDiagnosticLogsResponse,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    DiagnosisDiagnosticLogsStatusFromJSON,
    DiagnosisDiagnosticLogsStatusToJSON,
    DiagnosisDiagnosticNotificationFromJSON,
    DiagnosisDiagnosticNotificationToJSON,
    DiagnosisGenerateAgentDiagnosticLogsRequestFromJSON,
    DiagnosisGenerateAgentDiagnosticLogsRequestToJSON,
    DiagnosisGenerateCloudScannerDiagnosticLogsRequestFromJSON,
    DiagnosisGenerateCloudScannerDiagnosticLogsRequestToJSON,
    DiagnosisGenerateConsoleDiagnosticLogsRequestFromJSON,
    DiagnosisGenerateConsoleDiagnosticLogsRequestToJSON,
    DiagnosisGetDiagnosticLogsResponseFromJSON,
    DiagnosisGetDiagnosticLogsResponseToJSON,
} from '../models';

export interface GenerateAgentDiagnosticLogsRequest {
    diagnosisGenerateAgentDiagnosticLogsRequest?: DiagnosisGenerateAgentDiagnosticLogsRequest;
}

export interface GenerateCloudScannerDiagnosticLogsRequest {
    diagnosisGenerateCloudScannerDiagnosticLogsRequest?: DiagnosisGenerateCloudScannerDiagnosticLogsRequest;
}

export interface GenerateConsoleDiagnosticLogsRequest {
    diagnosisGenerateConsoleDiagnosticLogsRequest?: DiagnosisGenerateConsoleDiagnosticLogsRequest;
}

export interface UpdateAgentDiagnosticLogsStatusRequest {
    nodeId: string;
    diagnosisDiagnosticLogsStatus?: DiagnosisDiagnosticLogsStatus;
}

/**
 * DiagnosisApi - interface
 * 
 * @export
 * @interface DiagnosisApiInterface
 */
export interface DiagnosisApiInterface {
    /**
     * Get Diagnostic Notification
     * @summary Get Diagnostic Notification
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    diagnosticNotificationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DiagnosisDiagnosticNotification>>>;

    /**
     * Get Diagnostic Notification
     * Get Diagnostic Notification
     */
    diagnosticNotification(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DiagnosisDiagnosticNotification>>;

    /**
     * Generate Agent Diagnostic Logs
     * @summary Generate Agent Diagnostic Logs
     * @param {DiagnosisGenerateAgentDiagnosticLogsRequest} [diagnosisGenerateAgentDiagnosticLogsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    generateAgentDiagnosticLogsRaw(requestParameters: GenerateAgentDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Generate Agent Diagnostic Logs
     * Generate Agent Diagnostic Logs
     */
    generateAgentDiagnosticLogs(requestParameters: GenerateAgentDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Generate Cloud Scanner Diagnostic Logs
     * @summary Generate Cloud Scanner Diagnostic Logs
     * @param {DiagnosisGenerateCloudScannerDiagnosticLogsRequest} [diagnosisGenerateCloudScannerDiagnosticLogsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    generateCloudScannerDiagnosticLogsRaw(requestParameters: GenerateCloudScannerDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Generate Cloud Scanner Diagnostic Logs
     * Generate Cloud Scanner Diagnostic Logs
     */
    generateCloudScannerDiagnosticLogs(requestParameters: GenerateCloudScannerDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Generate Console Diagnostic Logs
     * @summary Generate Console Diagnostic Logs
     * @param {DiagnosisGenerateConsoleDiagnosticLogsRequest} [diagnosisGenerateConsoleDiagnosticLogsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    generateConsoleDiagnosticLogsRaw(requestParameters: GenerateConsoleDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Generate Console Diagnostic Logs
     * Generate Console Diagnostic Logs
     */
    generateConsoleDiagnosticLogs(requestParameters: GenerateConsoleDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get diagnostic logs download url links
     * @summary Get Diagnostic Logs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    getDiagnosticLogsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiagnosisGetDiagnosticLogsResponse>>;

    /**
     * Get diagnostic logs download url links
     * Get Diagnostic Logs
     */
    getDiagnosticLogs(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiagnosisGetDiagnosticLogsResponse>;

    /**
     * Update agent diagnostic logs status
     * @summary Update Agent Diagnostic Logs Status
     * @param {string} nodeId 
     * @param {DiagnosisDiagnosticLogsStatus} [diagnosisDiagnosticLogsStatus] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiagnosisApiInterface
     */
    updateAgentDiagnosticLogsStatusRaw(requestParameters: UpdateAgentDiagnosticLogsStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Update agent diagnostic logs status
     * Update Agent Diagnostic Logs Status
     */
    updateAgentDiagnosticLogsStatus(requestParameters: UpdateAgentDiagnosticLogsStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class DiagnosisApi extends runtime.BaseAPI implements DiagnosisApiInterface {

    /**
     * Get Diagnostic Notification
     * Get Diagnostic Notification
     */
    async diagnosticNotificationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DiagnosisDiagnosticNotification>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diagnosis/notification`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DiagnosisDiagnosticNotificationFromJSON));
    }

    /**
     * Get Diagnostic Notification
     * Get Diagnostic Notification
     */
    async diagnosticNotification(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DiagnosisDiagnosticNotification>> {
        const response = await this.diagnosticNotificationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Generate Agent Diagnostic Logs
     * Generate Agent Diagnostic Logs
     */
    async generateAgentDiagnosticLogsRaw(requestParameters: GenerateAgentDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/diagnosis/agent-logs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DiagnosisGenerateAgentDiagnosticLogsRequestToJSON(requestParameters.diagnosisGenerateAgentDiagnosticLogsRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Generate Agent Diagnostic Logs
     * Generate Agent Diagnostic Logs
     */
    async generateAgentDiagnosticLogs(requestParameters: GenerateAgentDiagnosticLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.generateAgentDiagnosticLogsRaw(requestParameters, initOverrides);
    }

    /**
     * Generate Cloud Scanner Diagnostic Logs
     * Generate Cloud Scanner Diagnostic Logs
     */
    async generateCloudScannerDiagnosticLogsRaw(requestParameters: GenerateCloudScannerDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/diagnosis/cloud-scanner-logs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DiagnosisGenerateCloudScannerDiagnosticLogsRequestToJSON(requestParameters.diagnosisGenerateCloudScannerDiagnosticLogsRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Generate Cloud Scanner Diagnostic Logs
     * Generate Cloud Scanner Diagnostic Logs
     */
    async generateCloudScannerDiagnosticLogs(requestParameters: GenerateCloudScannerDiagnosticLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.generateCloudScannerDiagnosticLogsRaw(requestParameters, initOverrides);
    }

    /**
     * Generate Console Diagnostic Logs
     * Generate Console Diagnostic Logs
     */
    async generateConsoleDiagnosticLogsRaw(requestParameters: GenerateConsoleDiagnosticLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/diagnosis/console-logs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DiagnosisGenerateConsoleDiagnosticLogsRequestToJSON(requestParameters.diagnosisGenerateConsoleDiagnosticLogsRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Generate Console Diagnostic Logs
     * Generate Console Diagnostic Logs
     */
    async generateConsoleDiagnosticLogs(requestParameters: GenerateConsoleDiagnosticLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.generateConsoleDiagnosticLogsRaw(requestParameters, initOverrides);
    }

    /**
     * Get diagnostic logs download url links
     * Get Diagnostic Logs
     */
    async getDiagnosticLogsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiagnosisGetDiagnosticLogsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/diagnosis/diagnostic-logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiagnosisGetDiagnosticLogsResponseFromJSON(jsonValue));
    }

    /**
     * Get diagnostic logs download url links
     * Get Diagnostic Logs
     */
    async getDiagnosticLogs(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiagnosisGetDiagnosticLogsResponse> {
        const response = await this.getDiagnosticLogsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update agent diagnostic logs status
     * Update Agent Diagnostic Logs Status
     */
    async updateAgentDiagnosticLogsStatusRaw(requestParameters: UpdateAgentDiagnosticLogsStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.nodeId === null || requestParameters.nodeId === undefined) {
            throw new runtime.RequiredError('nodeId','Required parameter requestParameters.nodeId was null or undefined when calling updateAgentDiagnosticLogsStatus.');
        }

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
            path: `/deepfence/diagnosis/agent-logs/status/{node_id}`.replace(`{${"node_id"}}`, encodeURIComponent(String(requestParameters.nodeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiagnosisDiagnosticLogsStatusToJSON(requestParameters.diagnosisDiagnosticLogsStatus),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update agent diagnostic logs status
     * Update Agent Diagnostic Logs Status
     */
    async updateAgentDiagnosticLogsStatus(requestParameters: UpdateAgentDiagnosticLogsStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateAgentDiagnosticLogsStatusRaw(requestParameters, initOverrides);
    }

}

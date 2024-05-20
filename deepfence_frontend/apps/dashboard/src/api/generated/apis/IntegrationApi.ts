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
  ModelDeleteIntegrationReq,
  ModelIntegrationAddReq,
  ModelIntegrationListResp,
  ModelIntegrationUpdateReq,
  ModelMessageResponse,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelDeleteIntegrationReqFromJSON,
    ModelDeleteIntegrationReqToJSON,
    ModelIntegrationAddReqFromJSON,
    ModelIntegrationAddReqToJSON,
    ModelIntegrationListRespFromJSON,
    ModelIntegrationListRespToJSON,
    ModelIntegrationUpdateReqFromJSON,
    ModelIntegrationUpdateReqToJSON,
    ModelMessageResponseFromJSON,
    ModelMessageResponseToJSON,
} from '../models';

export interface AddIntegrationRequest {
    modelIntegrationAddReq?: ModelIntegrationAddReq;
}

export interface DeleteIntegrationRequest {
    integrationId: string;
}

export interface DeleteIntegrationsRequest {
    modelDeleteIntegrationReq?: ModelDeleteIntegrationReq;
}

export interface UpdateIntegrationRequest {
    integrationId: string;
    modelIntegrationUpdateReq?: ModelIntegrationUpdateReq;
}

/**
 * IntegrationApi - interface
 * 
 * @export
 * @interface IntegrationApiInterface
 */
export interface IntegrationApiInterface {
    /**
     * Add a new supported integration
     * @summary Add Integration
     * @param {ModelIntegrationAddReq} [modelIntegrationAddReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApiInterface
     */
    addIntegrationRaw(requestParameters: AddIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Add a new supported integration
     * Add Integration
     */
    addIntegration(requestParameters: AddIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * Delete single integration
     * @summary Delete Single Integration
     * @param {string} integrationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApiInterface
     */
    deleteIntegrationRaw(requestParameters: DeleteIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete single integration
     * Delete Single Integration
     */
    deleteIntegration(requestParameters: DeleteIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete integrations
     * @summary Delete Integrations
     * @param {ModelDeleteIntegrationReq} [modelDeleteIntegrationReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApiInterface
     */
    deleteIntegrationsRaw(requestParameters: DeleteIntegrationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete integrations
     * Delete Integrations
     */
    deleteIntegrations(requestParameters: DeleteIntegrationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List all the added Integrations
     * @summary List Integrations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApiInterface
     */
    listIntegrationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelIntegrationListResp>>>;

    /**
     * List all the added Integrations
     * List Integrations
     */
    listIntegration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelIntegrationListResp>>;

    /**
     * Update integration
     * @summary Update Integration
     * @param {string} integrationId 
     * @param {ModelIntegrationUpdateReq} [modelIntegrationUpdateReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApiInterface
     */
    updateIntegrationRaw(requestParameters: UpdateIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Update integration
     * Update Integration
     */
    updateIntegration(requestParameters: UpdateIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

}

/**
 * 
 */
export class IntegrationApi extends runtime.BaseAPI implements IntegrationApiInterface {

    /**
     * Add a new supported integration
     * Add Integration
     */
    async addIntegrationRaw(requestParameters: AddIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
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
            path: `/deepfence/integration`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelIntegrationAddReqToJSON(requestParameters.modelIntegrationAddReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Add a new supported integration
     * Add Integration
     */
    async addIntegration(requestParameters: AddIntegrationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.addIntegrationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete single integration
     * Delete Single Integration
     */
    async deleteIntegrationRaw(requestParameters: DeleteIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling deleteIntegration.');
        }

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
            path: `/deepfence/integration/{integration_id}`.replace(`{${"integration_id"}}`, encodeURIComponent(String(requestParameters.integrationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete single integration
     * Delete Single Integration
     */
    async deleteIntegration(requestParameters: DeleteIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIntegrationRaw(requestParameters, initOverrides);
    }

    /**
     * Delete integrations
     * Delete Integrations
     */
    async deleteIntegrationsRaw(requestParameters: DeleteIntegrationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/integration/delete`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelDeleteIntegrationReqToJSON(requestParameters.modelDeleteIntegrationReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete integrations
     * Delete Integrations
     */
    async deleteIntegrations(requestParameters: DeleteIntegrationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIntegrationsRaw(requestParameters, initOverrides);
    }

    /**
     * List all the added Integrations
     * List Integrations
     */
    async listIntegrationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelIntegrationListResp>>> {
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
            path: `/deepfence/integration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelIntegrationListRespFromJSON));
    }

    /**
     * List all the added Integrations
     * List Integrations
     */
    async listIntegration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelIntegrationListResp>> {
        const response = await this.listIntegrationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update integration
     * Update Integration
     */
    async updateIntegrationRaw(requestParameters: UpdateIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        if (requestParameters.integrationId === null || requestParameters.integrationId === undefined) {
            throw new runtime.RequiredError('integrationId','Required parameter requestParameters.integrationId was null or undefined when calling updateIntegration.');
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
            path: `/deepfence/integration/{integration_id}`.replace(`{${"integration_id"}}`, encodeURIComponent(String(requestParameters.integrationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModelIntegrationUpdateReqToJSON(requestParameters.modelIntegrationUpdateReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Update integration
     * Update Integration
     */
    async updateIntegration(requestParameters: UpdateIntegrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.updateIntegrationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

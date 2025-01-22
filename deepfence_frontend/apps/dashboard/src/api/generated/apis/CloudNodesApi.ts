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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelCloudAccountDeleteReq,
  ModelCloudAccountRefreshReq,
  ModelCloudNodeAccountRegisterReq,
  ModelCloudNodeAccountsListReq,
  ModelCloudNodeAccountsListResp,
  ModelCloudNodeProvidersListResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelCloudAccountDeleteReqFromJSON,
    ModelCloudAccountDeleteReqToJSON,
    ModelCloudAccountRefreshReqFromJSON,
    ModelCloudAccountRefreshReqToJSON,
    ModelCloudNodeAccountRegisterReqFromJSON,
    ModelCloudNodeAccountRegisterReqToJSON,
    ModelCloudNodeAccountsListReqFromJSON,
    ModelCloudNodeAccountsListReqToJSON,
    ModelCloudNodeAccountsListRespFromJSON,
    ModelCloudNodeAccountsListRespToJSON,
    ModelCloudNodeProvidersListRespFromJSON,
    ModelCloudNodeProvidersListRespToJSON,
} from '../models';

export interface DeleteCloudNodeAccountRequest {
    modelCloudAccountDeleteReq?: ModelCloudAccountDeleteReq;
}

export interface ListCloudNodeAccountRequest {
    modelCloudNodeAccountsListReq?: ModelCloudNodeAccountsListReq;
}

export interface RefreshCloudNodeAccountRequest {
    modelCloudAccountRefreshReq?: ModelCloudAccountRefreshReq;
}

export interface RegisterCloudNodeAccountRequest {
    modelCloudNodeAccountRegisterReq?: ModelCloudNodeAccountRegisterReq;
}

/**
 * CloudNodesApi - interface
 * 
 * @export
 * @interface CloudNodesApiInterface
 */
export interface CloudNodesApiInterface {
    /**
     * Delete Cloud Node Account and related resources
     * @summary Delete Cloud Node Account
     * @param {ModelCloudAccountDeleteReq} [modelCloudAccountDeleteReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudNodesApiInterface
     */
    deleteCloudNodeAccountRaw(requestParameters: DeleteCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Cloud Node Account and related resources
     * Delete Cloud Node Account
     */
    deleteCloudNodeAccount(requestParameters: DeleteCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * List Cloud Node Accounts registered with the console
     * @summary List Cloud Node Accounts
     * @param {ModelCloudNodeAccountsListReq} [modelCloudNodeAccountsListReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudNodesApiInterface
     */
    listCloudNodeAccountRaw(requestParameters: ListCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudNodeAccountsListResp>>;

    /**
     * List Cloud Node Accounts registered with the console
     * List Cloud Node Accounts
     */
    listCloudNodeAccount(requestParameters: ListCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudNodeAccountsListResp>;

    /**
     * List Cloud Node Providers registered with the console
     * @summary List Cloud Node Providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudNodesApiInterface
     */
    listCloudProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudNodeProvidersListResp>>;

    /**
     * List Cloud Node Providers registered with the console
     * List Cloud Node Providers
     */
    listCloudProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudNodeProvidersListResp>;

    /**
     * Refresh the cloud resources in a Cloud Account
     * @summary Refresh Cloud Account
     * @param {ModelCloudAccountRefreshReq} [modelCloudAccountRefreshReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudNodesApiInterface
     */
    refreshCloudNodeAccountRaw(requestParameters: RefreshCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Refresh the cloud resources in a Cloud Account
     * Refresh Cloud Account
     */
    refreshCloudNodeAccount(requestParameters: RefreshCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Register Cloud Account
     * @summary Register Cloud Node Account
     * @param {ModelCloudNodeAccountRegisterReq} [modelCloudNodeAccountRegisterReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudNodesApiInterface
     */
    registerCloudNodeAccountRaw(requestParameters: RegisterCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Register Cloud Account
     * Register Cloud Node Account
     */
    registerCloudNodeAccount(requestParameters: RegisterCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class CloudNodesApi extends runtime.BaseAPI implements CloudNodesApiInterface {

    /**
     * Delete Cloud Node Account and related resources
     * Delete Cloud Node Account
     */
    async deleteCloudNodeAccountRaw(requestParameters: DeleteCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/cloud-node/account/delete`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCloudAccountDeleteReqToJSON(requestParameters.modelCloudAccountDeleteReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Cloud Node Account and related resources
     * Delete Cloud Node Account
     */
    async deleteCloudNodeAccount(requestParameters: DeleteCloudNodeAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCloudNodeAccountRaw(requestParameters, initOverrides);
    }

    /**
     * List Cloud Node Accounts registered with the console
     * List Cloud Node Accounts
     */
    async listCloudNodeAccountRaw(requestParameters: ListCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudNodeAccountsListResp>> {
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
            path: `/deepfence/cloud-node/list/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCloudNodeAccountsListReqToJSON(requestParameters.modelCloudNodeAccountsListReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCloudNodeAccountsListRespFromJSON(jsonValue));
    }

    /**
     * List Cloud Node Accounts registered with the console
     * List Cloud Node Accounts
     */
    async listCloudNodeAccount(requestParameters: ListCloudNodeAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudNodeAccountsListResp> {
        const response = await this.listCloudNodeAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Cloud Node Providers registered with the console
     * List Cloud Node Providers
     */
    async listCloudProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudNodeProvidersListResp>> {
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
            path: `/deepfence/cloud-node/list/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCloudNodeProvidersListRespFromJSON(jsonValue));
    }

    /**
     * List Cloud Node Providers registered with the console
     * List Cloud Node Providers
     */
    async listCloudProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudNodeProvidersListResp> {
        const response = await this.listCloudProvidersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Refresh the cloud resources in a Cloud Account
     * Refresh Cloud Account
     */
    async refreshCloudNodeAccountRaw(requestParameters: RefreshCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/cloud-node/account/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCloudAccountRefreshReqToJSON(requestParameters.modelCloudAccountRefreshReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Refresh the cloud resources in a Cloud Account
     * Refresh Cloud Account
     */
    async refreshCloudNodeAccount(requestParameters: RefreshCloudNodeAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.refreshCloudNodeAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Register Cloud Account
     * Register Cloud Node Account
     */
    async registerCloudNodeAccountRaw(requestParameters: RegisterCloudNodeAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/cloud-node/account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelCloudNodeAccountRegisterReqToJSON(requestParameters.modelCloudNodeAccountRegisterReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Register Cloud Account
     * Register Cloud Node Account
     */
    async registerCloudNodeAccount(requestParameters: RegisterCloudNodeAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.registerCloudNodeAccountRaw(requestParameters, initOverrides);
    }

}

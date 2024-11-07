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
  ModelAPIAuthRequest,
  ModelLoginRequest,
  ModelLoginResponse,
  ModelResponseAccessToken,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelAPIAuthRequestFromJSON,
    ModelAPIAuthRequestToJSON,
    ModelLoginRequestFromJSON,
    ModelLoginRequestToJSON,
    ModelLoginResponseFromJSON,
    ModelLoginResponseToJSON,
    ModelResponseAccessTokenFromJSON,
    ModelResponseAccessTokenToJSON,
} from '../models';

export interface AuthTokenRequest {
    modelAPIAuthRequest?: ModelAPIAuthRequest;
}

export interface LoginRequest {
    modelLoginRequest?: ModelLoginRequest;
}

/**
 * AuthenticationApi - interface
 * 
 * @export
 * @interface AuthenticationApiInterface
 */
export interface AuthenticationApiInterface {
    /**
     * Get access token for programmatic API access, by providing API Token
     * @summary Get Access Token for API Token
     * @param {ModelAPIAuthRequest} [modelAPIAuthRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authTokenRaw(requestParameters: AuthTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelResponseAccessToken>>;

    /**
     * Get access token for programmatic API access, by providing API Token
     * Get Access Token for API Token
     */
    authToken(requestParameters: AuthTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelResponseAccessToken>;

    /**
     * Reissue access token using refresh token
     * @summary Refresh access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authTokenRefreshRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelResponseAccessToken>>;

    /**
     * Reissue access token using refresh token
     * Refresh access token
     */
    authTokenRefresh(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelResponseAccessToken>;

    /**
     * Login API
     * @summary Login API
     * @param {ModelLoginRequest} [modelLoginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>>;

    /**
     * Login API
     * Login API
     */
    login(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse>;

    /**
     * Logout API
     * @summary Logout API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    logoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Logout API
     * Logout API
     */
    logout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class AuthenticationApi extends runtime.BaseAPI implements AuthenticationApiInterface {

    /**
     * Get access token for programmatic API access, by providing API Token
     * Get Access Token for API Token
     */
    async authTokenRaw(requestParameters: AuthTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelResponseAccessToken>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/auth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelAPIAuthRequestToJSON(requestParameters.modelAPIAuthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelResponseAccessTokenFromJSON(jsonValue));
    }

    /**
     * Get access token for programmatic API access, by providing API Token
     * Get Access Token for API Token
     */
    async authToken(requestParameters: AuthTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelResponseAccessToken> {
        const response = await this.authTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reissue access token using refresh token
     * Refresh access token
     */
    async authTokenRefreshRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelResponseAccessToken>> {
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
            path: `/deepfence/auth/token/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelResponseAccessTokenFromJSON(jsonValue));
    }

    /**
     * Reissue access token using refresh token
     * Refresh access token
     */
    async authTokenRefresh(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelResponseAccessToken> {
        const response = await this.authTokenRefreshRaw(initOverrides);
        return await response.value();
    }

    /**
     * Login API
     * Login API
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelLoginResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/deepfence/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelLoginRequestToJSON(requestParameters.modelLoginRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelLoginResponseFromJSON(jsonValue));
    }

    /**
     * Login API
     * Login API
     */
    async login(requestParameters: LoginRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelLoginResponse> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logout API
     * Logout API
     */
    async logoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/user/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logout API
     * Logout API
     */
    async logout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutRaw(initOverrides);
    }

}

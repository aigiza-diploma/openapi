// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { GetRegionsData, GetRegionsResponse, PostRegionsData, PostRegionsResponse, GetRegionsIdData, GetRegionsIdResponse, PutRegionsIdData, PutRegionsIdResponse, DeleteRegionsIdData, DeleteRegionsIdResponse, GetConnectByProviderData, GetConnectByProviderResponse, PostAuthLocalData, PostAuthLocalResponse, PostAuthLocalRegisterData, PostAuthLocalRegisterResponse, GetAuthByProviderCallbackData, GetAuthByProviderCallbackResponse, PostAuthForgotPasswordData, PostAuthForgotPasswordResponse, PostAuthResetPasswordData, PostAuthResetPasswordResponse, PostAuthChangePasswordData, PostAuthChangePasswordResponse, GetAuthEmailConfirmationData, GetAuthEmailConfirmationResponse, PostAuthSendEmailConfirmationData, PostAuthSendEmailConfirmationResponse, GetUsersPermissionsPermissionsResponse, GetUsersPermissionsRolesResponse, PostUsersPermissionsRolesData, PostUsersPermissionsRolesResponse, GetUsersPermissionsRolesByIdData, GetUsersPermissionsRolesByIdResponse, PutUsersPermissionsRolesByRoleData, PutUsersPermissionsRolesByRoleResponse, DeleteUsersPermissionsRolesByRoleData, DeleteUsersPermissionsRolesByRoleResponse, GetUsersResponse, PostUsersData, PostUsersResponse, GetUsersByIdData, GetUsersByIdResponse, PutUsersByIdData, PutUsersByIdResponse, DeleteUsersByIdData, DeleteUsersByIdResponse, GetUsersMeResponse, GetUsersCountResponse } from './types.gen';

export class RegionService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * @param data The data for the request.
     * @param data.sort Sort by attributes ascending (asc) or descending (desc)
     * @param data.paginationWithCount Return page/pageSize (default: true)
     * @param data.paginationPage Page number (default: 0)
     * @param data.paginationPageSize Page size (default: 25)
     * @param data.paginationStart Offset value (default: 0)
     * @param data.paginationLimit Number of entities to return (default: 25)
     * @param data.fields Fields to return (ex: title,author)
     * @param data.populate Relations to return
     * @param data.filters Filters to apply
     * @param data.locale Locale to apply
     * @returns RegionListResponse OK
     * @throws ApiError
     */
    public getRegions(data: GetRegionsData = {}): CancelablePromise<GetRegionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions',
            query: {
                sort: data.sort,
                'pagination[withCount]': data.paginationWithCount,
                'pagination[page]': data.paginationPage,
                'pagination[pageSize]': data.paginationPageSize,
                'pagination[start]': data.paginationStart,
                'pagination[limit]': data.paginationLimit,
                fields: data.fields,
                populate: data.populate,
                filters: data.filters,
                locale: data.locale
            },
            errors: {
                400: 'Bad Request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not Found',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public postRegions(data: PostRegionsData): CancelablePromise<PostRegionsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/regions',
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                400: 'Bad Request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not Found',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public getRegionsId(data: GetRegionsIdData): CancelablePromise<GetRegionsIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions/{id}',
            path: {
                id: data.id
            },
            errors: {
                400: 'Bad Request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not Found',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.requestBody
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public putRegionsId(data: PutRegionsIdData): CancelablePromise<PutRegionsIdResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/regions/{id}',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json',
            errors: {
                400: 'Bad Request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not Found',
                500: 'Internal Server Error'
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @returns number OK
     * @throws ApiError
     */
    public deleteRegionsId(data: DeleteRegionsIdData): CancelablePromise<DeleteRegionsIdResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/regions/{id}',
            path: {
                id: data.id
            },
            errors: {
                400: 'Bad Request',
                401: 'Unauthorized',
                403: 'Forbidden',
                404: 'Not Found',
                500: 'Internal Server Error'
            }
        });
    }
    
}

export class UsersPermissionsAuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Login with a provider
     * Redirects to provider login before being redirect to /auth/{provider}/callback
     * @param data The data for the request.
     * @param data.provider Provider name
     * @returns Error Error
     * @throws ApiError
     */
    public getConnectByProvider(data: GetConnectByProviderData): CancelablePromise<GetConnectByProviderResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connect/{provider}',
            path: {
                provider: data.provider
            },
            errors: {
                301: 'Redirect response'
            }
        });
    }
    
    /**
     * Local login
     * Returns a jwt token and user info
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Users_Permissions_UserRegistration Connection
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthLocal(data: PostAuthLocalData): CancelablePromise<PostAuthLocalResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/local',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Register a user
     * Returns a jwt token and user info
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Users_Permissions_UserRegistration Successful registration
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthLocalRegister(data: PostAuthLocalRegisterData): CancelablePromise<PostAuthLocalRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/local/register',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Default Callback from provider auth
     * @param data The data for the request.
     * @param data.provider Provider name
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public getAuthByProviderCallback(data: GetAuthByProviderCallbackData): CancelablePromise<GetAuthByProviderCallbackResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/{provider}/callback',
            path: {
                provider: data.provider
            }
        });
    }
    
    /**
     * Send rest password email
     * @param data The data for the request.
     * @param data.requestBody
     * @returns unknown Returns ok
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthForgotPassword(data: PostAuthForgotPasswordData): CancelablePromise<PostAuthForgotPasswordResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/forgot-password',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Rest user password
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthResetPassword(data: PostAuthResetPasswordData): CancelablePromise<PostAuthResetPasswordResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/reset-password',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Update user's own password
     * @param data The data for the request.
     * @param data.requestBody
     * @returns Users_Permissions_UserRegistration Returns a jwt token and user info
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthChangePassword(data: PostAuthChangePasswordData): CancelablePromise<PostAuthChangePasswordResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/change-password',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Confirm user email
     * @param data The data for the request.
     * @param data.confirmation confirmation token received by email
     * @returns Error Error
     * @throws ApiError
     */
    public getAuthEmailConfirmation(data: GetAuthEmailConfirmationData = {}): CancelablePromise<GetAuthEmailConfirmationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/email-confirmation',
            query: {
                confirmation: data.confirmation
            },
            errors: {
                301: 'Redirects to the configure email confirmation redirect url'
            }
        });
    }
    
    /**
     * Send confirmation email
     * @param data The data for the request.
     * @param data.requestBody
     * @returns unknown Returns email and boolean to confirm email was sent
     * @returns Error Error
     * @throws ApiError
     */
    public postAuthSendEmailConfirmation(data: PostAuthSendEmailConfirmationData): CancelablePromise<PostAuthSendEmailConfirmationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/send-email-confirmation',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
}

export class UsersPermissionsUsersRolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) { }
    
    /**
     * Get default generated permissions
     * @returns unknown Returns the permissions tree
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersPermissionsPermissions(): CancelablePromise<GetUsersPermissionsPermissionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users-permissions/permissions'
        });
    }
    
    /**
     * List roles
     * @returns unknown Returns list of roles
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersPermissionsRoles(): CancelablePromise<GetUsersPermissionsRolesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users-permissions/roles'
        });
    }
    
    /**
     * Create a role
     * @param data The data for the request.
     * @param data.requestBody
     * @returns unknown Returns ok if the role was create
     * @returns Error Error
     * @throws ApiError
     */
    public postUsersPermissionsRoles(data: PostUsersPermissionsRolesData): CancelablePromise<PostUsersPermissionsRolesResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users-permissions/roles',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Get a role
     * @param data The data for the request.
     * @param data.id role Id
     * @returns unknown Returns the role
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersPermissionsRolesById(data: GetUsersPermissionsRolesByIdData): CancelablePromise<GetUsersPermissionsRolesByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users-permissions/roles/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Update a role
     * @param data The data for the request.
     * @param data.role role Id
     * @param data.requestBody
     * @returns unknown Returns ok if the role was udpated
     * @returns Error Error
     * @throws ApiError
     */
    public putUsersPermissionsRolesByRole(data: PutUsersPermissionsRolesByRoleData): CancelablePromise<PutUsersPermissionsRolesByRoleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/users-permissions/roles/{role}',
            path: {
                role: data.role
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Delete a role
     * @param data The data for the request.
     * @param data.role role Id
     * @returns unknown Returns ok if the role was delete
     * @returns Error Error
     * @throws ApiError
     */
    public deleteUsersPermissionsRolesByRole(data: DeleteUsersPermissionsRolesByRoleData): CancelablePromise<DeleteUsersPermissionsRolesByRoleResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/users-permissions/roles/{role}',
            path: {
                role: data.role
            }
        });
    }
    
    /**
     * Get list of users
     * @returns Users_Permissions_User Returns an array of users
     * @returns Error Error
     * @throws ApiError
     */
    public getUsers(): CancelablePromise<GetUsersResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users'
        });
    }
    
    /**
     * Create a user
     * @param data The data for the request.
     * @param data.requestBody
     * @returns unknown Returns created user info
     * @returns Error Error
     * @throws ApiError
     */
    public postUsers(data: PostUsersData): CancelablePromise<PostUsersResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Get a user
     * @param data The data for the request.
     * @param data.id user Id
     * @returns Users_Permissions_User Returns a user
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersById(data: GetUsersByIdData): CancelablePromise<GetUsersByIdResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Update a user
     * @param data The data for the request.
     * @param data.id user Id
     * @param data.requestBody
     * @returns unknown Returns updated user info
     * @returns Error Error
     * @throws ApiError
     */
    public putUsersById(data: PutUsersByIdData): CancelablePromise<PutUsersByIdResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/users/{id}',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * Delete a user
     * @param data The data for the request.
     * @param data.id user Id
     * @returns unknown Returns deleted user info
     * @returns Error Error
     * @throws ApiError
     */
    public deleteUsersById(data: DeleteUsersByIdData): CancelablePromise<DeleteUsersByIdResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * Get authenticated user info
     * @returns Users_Permissions_User Returns user info
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersMe(): CancelablePromise<GetUsersMeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me'
        });
    }
    
    /**
     * Get user count
     * @returns number Returns a number
     * @returns Error Error
     * @throws ApiError
     */
    public getUsersCount(): CancelablePromise<GetUsersCountResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/count'
        });
    }
    
}
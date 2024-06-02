/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegionListResponse } from '../models/RegionListResponse';
import type { RegionRequest } from '../models/RegionRequest';
import type { RegionResponse } from '../models/RegionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RegionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param sort Sort by attributes ascending (asc) or descending (desc)
     * @param paginationWithCount Return page/pageSize (default: true)
     * @param paginationPage Page number (default: 0)
     * @param paginationPageSize Page size (default: 25)
     * @param paginationStart Offset value (default: 0)
     * @param paginationLimit Number of entities to return (default: 25)
     * @param fields Fields to return (ex: title,author)
     * @param populate Relations to return
     * @param filters Filters to apply
     * @param locale Locale to apply
     * @returns RegionListResponse OK
     * @throws ApiError
     */
    public getRegions(
        sort?: string,
        paginationWithCount?: boolean,
        paginationPage?: number,
        paginationPageSize?: number,
        paginationStart?: number,
        paginationLimit?: number,
        fields?: string,
        populate?: string,
        filters?: Record<string, any>,
        locale?: string,
    ): CancelablePromise<RegionListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public postRegions(
        requestBody: RegionRequest,
    ): CancelablePromise<RegionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/regions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public getRegionsId(
        id: number,
    ): CancelablePromise<RegionResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns RegionResponse OK
     * @throws ApiError
     */
    public putRegionsId(
        id: number,
        requestBody: RegionRequest,
    ): CancelablePromise<RegionResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/regions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns number OK
     * @throws ApiError
     */
    public deleteRegionsId(
        id: number,
    ): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/regions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
}

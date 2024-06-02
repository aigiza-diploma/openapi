/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegionListResponseDataItem } from './RegionListResponseDataItem';
export type RegionListResponse = {
    data?: Array<RegionListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};


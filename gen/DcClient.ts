/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { RegionService } from './services/RegionService';
import { UploadFileService } from './services/UploadFileService';
import { UsersPermissionsAuthService } from './services/UsersPermissionsAuthService';
import { UsersPermissionsUsersRolesService } from './services/UsersPermissionsUsersRolesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class DcClient {
    public readonly region: RegionService;
    public readonly uploadFile: UploadFileService;
    public readonly usersPermissionsAuth: UsersPermissionsAuthService;
    public readonly usersPermissionsUsersRoles: UsersPermissionsUsersRolesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:1337/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.region = new RegionService(this.request);
        this.uploadFile = new UploadFileService(this.request);
        this.usersPermissionsAuth = new UsersPermissionsAuthService(this.request);
        this.usersPermissionsUsersRoles = new UsersPermissionsUsersRolesService(this.request);
    }
}


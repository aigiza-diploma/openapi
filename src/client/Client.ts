import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { CallbackRequestService } from './services.gen';
import { DirectionService } from './services.gen';
import { RegionService } from './services.gen';
import { ServiceService } from './services.gen';
import { ServiceTypeService } from './services.gen';
import { UsersPermissionsAuthService } from './services.gen';
import { UsersPermissionsUsersRolesService } from './services.gen';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Client {

	public readonly callbackRequest: CallbackRequestService;
	public readonly direction: DirectionService;
	public readonly region: RegionService;
	public readonly service: ServiceService;
	public readonly serviceType: ServiceTypeService;
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
			interceptors: {
				request: config?.interceptors?.request ?? new Interceptors(),
				response: config?.interceptors?.response ?? new Interceptors(),
      },
		});

		this.callbackRequest = new CallbackRequestService(this.request);
		this.direction = new DirectionService(this.request);
		this.region = new RegionService(this.request);
		this.service = new ServiceService(this.request);
		this.serviceType = new ServiceTypeService(this.request);
		this.usersPermissionsAuth = new UsersPermissionsAuthService(this.request);
		this.usersPermissionsUsersRoles = new UsersPermissionsUsersRolesService(this.request);
	}
}

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {ServersService} from "../servers.service";

interface Server {
  id: number,
  name: string,
  status: string
}

export function ServerResolver(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server | undefined {
  const service = inject(ServersService);
  return service.getServer(+route.params['id'])
}

/*
* Deprecated method
* export class ServerResolver implements Resolve<Server> {
*       resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
*     }
* }
*
 */

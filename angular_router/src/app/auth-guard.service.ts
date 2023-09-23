import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = async (route, state) => {

  const router = inject(Router)
  const service = inject(AuthService)
  const authenticated = await service.isAuthenticate()

  if (!authenticated) {
    await router.navigate(['/servers'])
    return false
  }
  return true
}


/*
* Older method Deprecated since angular 15
*
* @Injectable()
* export class AuthGuard implements CanActivate {
*   constructor(private authService: AuthService, private router: Router) {}
*
*   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
*     return this.authService.isAuthenticated()
*         .then(
*           (authenticated: boolean) => {
*             if (authenticated) {
*                 return false;
*               } else {
*                 this.router.navigate(['/servers'])
*               }
*           }
*       )
*   }
* }
*
* */

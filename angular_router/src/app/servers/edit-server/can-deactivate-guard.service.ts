import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export function canDeactivateGuard(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
                                   currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
  Observable<boolean> | Promise<boolean> | boolean {
  return component.canDeactivate()
}

/*
* Deprecated method
*
* export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
*   canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
*         currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
*           Observable<boolean> | Promise<boolean> | boolean  {
*             return component.canDeactivate()
*           }
* }
* */

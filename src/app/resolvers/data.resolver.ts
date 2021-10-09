import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LeaguedataService } from '../services/leaguedata.service';
import { ResponseBody } from '../Types';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<ResponseBody> {
  constructor(private leaguedataService: LeaguedataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResponseBody> {
    return this.leaguedataService.getLeagueData();
  }
}

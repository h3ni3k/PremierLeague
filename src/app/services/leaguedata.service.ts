import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseBody } from '../Types';

@Injectable({
  providedIn: 'root',
})
export class LeaguedataService {
  private apiUrl =
    'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc';

  constructor(private http: HttpClient) {}

  getLeagueData(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>(this.apiUrl);
  }
}

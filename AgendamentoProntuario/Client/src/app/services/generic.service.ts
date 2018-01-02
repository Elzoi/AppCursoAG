import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { SessionService } from '../services/session.service';

@Injectable()
export class GenericService {
  
  constructor(
    private http: HttpClient, 
    private session: SessionService, 
    private app: AppConfig) { }

  get<T>(url: string, cpf: string): Observable<T>
  {
    let params = new HttpParams().set('cpf', cpf);
    let options = { headers: this.getHeaders(), params: params, withCredentials: true };
    return this.http.get<T>(this.getFullUrl(url), options);
  }

  post<T>(url: string, dto: any): Observable<T>
  {
    let options = { headers: this.getHeaders() };
    return this.http.post<T>(this.getFullUrl(url), dto, options);
  }

  getText(url: string): Observable<string>
  {
    let headers = this.getHeaders()
    headers.append('responseType', 'text');
    let options = { headers: headers };
    return this.http.get<string>(this.getFullUrl(url), options );
  }

  getHeaders(): HttpHeaders
  {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
    //.append('Content-Type', 'application/json');
  }

  private getToken(): string
  {
    if (this.session.hasCurrentSession()) {
      let currentSession = this.session.getCurrentSession();
      return currentSession.sessionToken;
    }
    else {
      return '';
    }
  }

  getFullUrl(url: string)
  {
    return this.app.apiUrl + url; //TODO mais roubstez
  }
}


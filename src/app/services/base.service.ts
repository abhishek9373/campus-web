import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config/shared.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Req } from '../interfaces/request';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpErrorHandlingService } from './http-error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient, private errorHandle: HttpErrorHandlingService) { }

  // service for all API calls. all calls goes from here by passing url as a parameter
  fetch(req: Req): Observable<any>{
    try{
      const urlString: string = SERVER_URL+req.url;
      return this.http.request(req.method, urlString, req.options).pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorHandle.handleHttpError(error);
          return throwError(error);
        })
      );
    }catch(err: any){
      throw err;
    }
  }

}

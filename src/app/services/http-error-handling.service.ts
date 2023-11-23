// http-error-handling.service.ts
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlingService {
  handleHttpError(error: HttpErrorResponse): Observable<never> {
    // Your error handling logic goes here
    console.error('An error occurred:', error);

    // Optionally, you can rethrow the error to propagate it to the component
    return throwError('Something went wrong. Please try again later.');
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseService: BaseService, private http: HttpClient) { }

  // service to get OTP on WhatsAPP
  getOTP(phoneNumber: number): Observable<HttpResponse<any>> {
    return this.baseService.fetch({ method: "POST", url: "/auth/login", options: { body: { deviceId: "vwrvr", phone: phoneNumber, country: "+91" } } });
  }
}

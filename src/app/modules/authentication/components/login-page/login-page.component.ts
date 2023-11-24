import { Component } from '@angular/core';
import { ScrollToTopService } from 'src/app/services/scroll-to-top.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private scrollToTopService: ScrollToTopService, private loginService: LoginService){ }

  ngOnInit(): void {
    this.scrollToTopService.scrollToTop();
  }

  loginForm: FormGroup = new FormGroup({
    phone: new FormControl(''),
    otp: new FormControl('')
  });

  get phone(){
    return this.loginForm.value.phone;
  }
  get otp(){
    return this.loginForm.value.otp;
  }

  login(){
    if(true){
      const phone: number = this.loginForm.value.phone;
      console.log(phone)
      this.loginService.getOTP(phone).subscribe((res: any)=>{
        console.log(res)
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){ }

  user!: UserI | null;

  ngOnInit(): void {
    // console.log(this.userService.getCurrentUser());
    this.userService.user$.subscribe((user: UserI | null)=>{
      if(user){
        // user is loggedin
        this.user = user;
      }else{
        // user is not logged in
        this.user = null;
      }
    });
  }

  // navigate to login Page
  goToLoginPage(){
    this.router.navigate(['/auth']);
  }

  // navigate to househub Page
  gotToHousehub(){
    if(this.user){
      this.router.navigate(['/househub'])
    }else{
      this.router.navigate(['/foodhub']);
    }
  }
}

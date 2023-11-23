import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private userService: UserService){ }

  ngOnInit(): void {
    console.log(this.userService.getCurrentUser());
    this.userService.user$.subscribe((user: UserI | null)=>{
      if(user){
        // user is loggedin
      }else{
        // user is not logged in
      }
    });
  }
}

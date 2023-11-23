import { Component } from '@angular/core';
import { ScrollToTopService } from 'src/app/services/scroll-to-top.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private scrollToTopService: ScrollToTopService){ }

  ngOnInit(): void {
    this.scrollToTopService.scrollToTop();
  }
}

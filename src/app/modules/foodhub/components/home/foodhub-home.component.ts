import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from 'src/app/services/scroll-to-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class FoodHubHome implements OnInit{
  constructor(private scrollToTopService: ScrollToTopService){ }

  ngOnInit(): void {
    this.scrollToTopService.scrollToTop();
  }
}

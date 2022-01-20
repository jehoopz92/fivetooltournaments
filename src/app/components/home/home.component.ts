import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  scrolled: any
  screenWidth: any;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    window.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset
    })
  }
}

import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  scrolled: any

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset
    })
  }
}

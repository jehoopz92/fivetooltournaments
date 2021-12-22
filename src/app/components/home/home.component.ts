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
    console.log(this.scrolled)
    window.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset

      console.log(this.scrolled)

      // if (scrolled >= 1) {
      //   setShowMobileNav('mobileNav');
      // } else {
      //   setShowMobileNav('');
      // }

      // if (scrolled >= 729) {
      //   setShowLogo('addLogo');
      //   setShowNav('changeNav');
      // } else {
      //   setShowLogo('navbar-brand');
      //   setShowNav('');
      // }
    })
  }
}

// Angular imports (Modules)
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
// Components
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AboutusComponent } from './components/aboutus/aboutus.component'
import { RulesComponent } from './components/rules/rules.component'
import { FooterComponent } from './components/footer/footer.component'
import { ContactusComponent } from './components/contactus/contactus.component'
import { TournamentsComponent } from './components/tournaments/tournaments.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    NavbarComponent,
    AboutusComponent,
    RulesComponent,
    FooterComponent,
    ContactusComponent,
    TournamentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

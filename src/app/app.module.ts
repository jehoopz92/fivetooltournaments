// Angular imports (Modules)
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
// Components
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { AboutusComponent } from './components/aboutus/aboutus.component'
import { RulesComponent } from './components/rules/rules.component'
import { FooterComponent } from './components/footer/footer.component'
import { ContactusComponent } from './components/contactus/contactus.component'
import { TournamentsComponent } from './components/tournaments/tournaments.component'
import { ApparelComponent } from './components/apparel/apparel.component'
import { NgxStripeModule } from 'ngx-stripe'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    AboutusComponent,
    RulesComponent,
    FooterComponent,
    ContactusComponent,
    TournamentsComponent,
    ApparelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

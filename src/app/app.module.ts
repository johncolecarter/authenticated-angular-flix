import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeroComponent } from './hero/hero.component';
import { TitleListComponent } from './title-list/title-list.component';
import { HeroButtonComponent } from './hero-button/hero-button.component';
import { ItemComponent } from './item/item.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { MainComponent } from './main/main.component';
import { MovieService } from './services/movie.service';
import { MovieApiService } from './services/movie-api.service';
import { ApiService } from './services/api.service';
import { SignUpLoginComponent } from './sign-up-login/sign-up-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchBoxComponent,
    HeroComponent,
    TitleListComponent,
    HeroButtonComponent,
    ItemComponent,
    ListToggleComponent,
    MainComponent,
    SignUpLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService, MovieApiService, ApiService, NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

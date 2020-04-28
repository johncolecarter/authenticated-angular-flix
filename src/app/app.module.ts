import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { MovieService } from './movie.service';
import { MovieApiService } from './movie-api.service';
import { ApiService } from './api.service';

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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService, MovieApiService, ApiService, NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

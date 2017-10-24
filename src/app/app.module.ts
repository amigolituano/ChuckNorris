import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgIf } from '@angular/common';
import * as $ from "jquery";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';
import { FactsListingComponent } from './facts-listing/facts-listing.component';
import { FactsByCategoryComponent } from './facts-by-category/facts-by-category.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FactsListingComponent,
    FactsByCategoryComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

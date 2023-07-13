import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { PagesComponent } from './pages/pages.component';
import { FavpageComponent } from './pages/favpage/favpage.component';


@NgModule({
  declarations: [
    PagesComponent,
    FavpageComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }

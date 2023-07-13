import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavpageComponent } from './pages/favpage/favpage.component';


@NgModule({
  declarations: [
    FavpageComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }

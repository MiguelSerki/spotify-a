import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';


@NgModule({
  declarations: [  
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    SharedModule
  ]
})
export class FavouritesModule { }

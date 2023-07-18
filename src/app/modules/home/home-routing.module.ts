import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesModule } from '@modules/favourites/favourites.module';
import { TracksModule } from '@modules/tracks/tracks.module';


const routes: Routes = [
 {
  path: 'tracks',
  loadChildren: () => import ('@modules/tracks/tracks.module').then( m=> m.TracksModule)
 },
 {
  path: 'favourite',
  loadChildren: () => import ('@modules/favourites/favourites.module').then( m=> m.FavouritesModule)
 },
 {
  path: 'history',
  loadChildren: () => import ('@modules/history/history.module').then( m=> m.HistoryModule)
 },
 {
  path: '**',//TODO 404 cuando no existe la ruta
  redirectTo: '/tracks'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ComicComponent } from './comic/comic.component'; 
import { ComicArchiveComponent } from './comic-archive/comic-archive.component';


const routes: Routes =  [
  {path: '', redirectTo: 'comics/latest', pathMatch: 'full'}, 
  {path: 'comics', redirectTo: 'comics/latest', pathMatch:'full'},
  {path: 'comics/latest', component: ComicComponent},
  {path: 'comics/:nav', component: ComicComponent},
  {path: 'archive', component: ComicArchiveComponent}


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ComicComponent } from './comic/comic.component'; 
import { ComicArchiveComponent } from './comic-archive/comic-archive.component';


const routes: Routes =  [
  {path: '', redirectTo: 'archive', pathMatch: 'full'}, 
  {path: 'comics/:id', component: ComicComponent},
  {path: 'archive', component: ComicArchiveComponent}


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

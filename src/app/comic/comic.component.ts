import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ComicService } from '../comic.service'; 
import { Comic } from '../comic'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic: Comic;
  numComics: number; 

  constructor(
    private route: ActivatedRoute, 
    private comicService: ComicService,
    private Location: Location,
    private router: Router
    ) 
    { }

  ngOnInit() {
    this.comicService.getTotal()
      .subscribe( total => this.numComics = total); 
    this.getComic();

  }




  getComic(){
    this.route.paramMap.subscribe(params=> { 
      const curr_id = +params.get('id'); 
      if(!curr_id){
        this.comicService.getComic(this.numComics)
        .subscribe(comic => this.comic = comic);
      }else{
        this.comicService.getComic(curr_id)
        .subscribe(comic => this.comic = comic);
      }
     
    })
  } 

  previousComic(){
    let next = this.comic.id -1; 
    if (next >= 1) this.router.navigateByUrl('/comics/' + next); 
  }
  

  nextComic(){
    let next = this.comic.id + 1; 
    console.log("total comics " + this.numComics); 
    if(next<=this.numComics) this.router.navigateByUrl('/comics/' + next); 
  }

  randComic(){ 
    let next =  Math.ceil(Math.random() * (this.numComics)); 
    this.router.navigateByUrl('/comics/' + next); 

  }

}

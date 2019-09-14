import { Component, OnInit } from '@angular/core';
import { COMICS } from '../mock-comic';
import { Comic } from '../comic';
import { ComicService } from '../comic.service'; 

@Component({
  selector: 'app-comic-archive',
  templateUrl: './comic-archive.component.html',
  styleUrls: ['./comic-archive.component.css']
})
export class ComicArchiveComponent implements OnInit {

  comics: Comic []; 

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getComics();
  
  }
 
  onSelect(comic: Comic){
    console.log("onSelect");

  }

  getComics(): void { 
    this.comicService.getComics()
      .subscribe(comics => this.comics = comics); 
  }


}

import { GiphyRequestService } from './../../giphy-request/giphy-request.service';
import { Gif } from './../../gif-class/gif';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  gif$ : Gif;
  gifs : any = [];

  constructor(private giphyRequest : GiphyRequestService) { 
  }


  ngOnInit() {
    this.showGifs();
    
  }
  showGifs (){
    return this.giphyRequest.getGifsRequest().subscribe((res) => {
      this.gifs = res
    }, (error) => {
      console.log(error)
    }) 
  }

}

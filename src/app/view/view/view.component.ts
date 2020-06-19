import { GiphyRequestService } from './../../giphy-request/giphy-request.service';
import { Gif } from './../../gif-class/gif';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  gif : Gif;

  constructor(private giphyRequest : GiphyRequestService) { 
  }


  ngOnInit() {
  this.giphyRequest.getGifsRequest()
  this.gif = this.giphyRequest.gif    
  }
  
}

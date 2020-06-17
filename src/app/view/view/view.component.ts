import { Gif } from './../../gif-class/gif';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  gif : Gif;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      data : {
        images : {
          downsized_large : {
            height: number,
            size : number,
            url : any,
            width : number
          }
        }
      }
    }
    this.http.get<ApiResponse>("https://api.giphy.com/v1/gifs/trending?api_key=s6sJ9jn32QZwVOlW2eByB26VMykVaKJv&limit=1&rating=PG").subscribe(res => {
      this.gif = new Gif(res.data);
    })
  }

}

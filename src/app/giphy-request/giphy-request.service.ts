import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../gif-class/gif';

@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {

  apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=s6sJ9jn32QZwVOlW2eByB26VMykVaKJv&limit=1&rating=PG'

  constructor(private http : HttpClient) { }

  getGifs() {
    return this.http.get<Gif[]>(this.apiUrl);
  }

}

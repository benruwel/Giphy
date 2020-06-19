import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif } from '../gif-class/gif';


@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {

  gif : Gif;

  apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=s6sJ9jn32QZwVOlW2eByB26VMykVaKJv'

  constructor(private http : HttpClient) { 
    this.gif =new Gif("");
  }

  getGifsRequest() {
    interface APIResponse {
      data : {
        images : {
          down_sized : {
            url : any
          }
        }
      }
    }

    let promise = new Promise((resolve, reject) =>{
      this.http.get<APIResponse>(this.apiUrl).toPromise().then(response => {
        this.gif.gifUrl = JSON.parse(response)
        console.log(response)

        resolve()
      },
      error => {
        reject(error);
        console.log(error);
      })
    })
    return promise;
  }

}

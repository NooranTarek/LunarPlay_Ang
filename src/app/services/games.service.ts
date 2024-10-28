import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) {

   }
   baseUrl:string='https://api.noroff.dev/api/v1/';
   getAllGames(){
    console.log(`$baseUrl`);
    return this.http.get(`$baseUrl`+'gamehub')
   }
}

import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
games:Game[]=[];
  constructor(private gameList:GamesService){

  }
 ngOnInit():void{
    console.log("hello");  
    this.getAllGames();
  }
  getAllGames(){
    this.gameList.getAllGames().subscribe({
      next:(response:any)=>{
        console.log("res",response);
        this.games=response;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    }
    }

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
  ngOnInit(){
    this.getAllGames;
  }
  getAllGames(){
    this.gameList.getAllGames().subscribe(
    (res)=>console.log(res),
    (error)=>console.log(error),
    )
  }
}

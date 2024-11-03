import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../interfaces/game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent {
gameItem:any;
  constructor(private gameList:GamesService,private activeroute:ActivatedRoute){
}
ngOnInit(){
this.getGameData();
}
getGameData(){
  const id=this.activeroute.snapshot.params['id'];  
  console.log("id---->",id);
  this.gameList.getSpecificGame(id).subscribe({
    next:(response:any)=>{
      this.gameItem=response;
      console.log("gameItem",this.gameItem);
      
    },
    error:(error:any)=>{
      console.log("error");
      
    }
  })
}
}
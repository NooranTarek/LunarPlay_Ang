import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game';
import { ToastrService } from 'ngx-toastr';
import { GameCardComponent } from '../game-card/game-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
games:Game[]=[];
  constructor(private toaster: ToastrService,
    private gameList:GamesService,private router:Router){

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

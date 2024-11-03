import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
@Input() gameItem:any;
constructor(private toaster: ToastrService,private router:Router){}
onclick(){
  this.toaster.success("clicked successfully")
}
    redirectToDetails(id:string){
      this.router.navigate(['game-details',id]);
    }
}

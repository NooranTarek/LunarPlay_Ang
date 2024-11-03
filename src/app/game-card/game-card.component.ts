import { Component, Input } from '@angular/core';
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
constructor(private toaster: ToastrService){}
onclick(){
  this.toaster.success("clicked successfully")
}
}

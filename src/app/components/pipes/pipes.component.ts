
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquarePipe } from '../../pipes/square.pipe';
import { MultiplicationPipe } from '../../pipes/multiplication.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,SquarePipe,MultiplicationPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  message="Good Morning !"

  student={id:101,name:"Nisha"}

  para="we are learning angular"

  date=new Date()

}

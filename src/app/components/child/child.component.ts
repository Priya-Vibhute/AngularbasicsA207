import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Input() receivedData=""
 @Output() eventemitter=new EventEmitter<string>();

 sendData()
 {
   this.eventemitter.emit("Hello from child")
 }


}

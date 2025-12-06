import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  @Input() receivedData :String="ABCD"

  constructor()
  {
    console.log("constructor",this.receivedData)
  }

  ngOnInit()
  {
    console.log("ngOnInit",this.receivedData)
  }

  ngOnChanges(changes:SimpleChanges)
  {
    console.log("ngOnChanges",changes)
  }

  ngDoCheck()
  {
    console.log("ngDoCheck")
  }

  ngOnDestroy()
  {
    console.log("Component destroyed")
  }

}

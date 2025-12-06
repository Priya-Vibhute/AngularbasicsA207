import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'node:console';
import { catchError, filter, first, from, interval, map, mergeAll, mergeMap, Observable, of, retry, take } from 'rxjs';

@Component({
  selector: 'app-observable-examples',
  imports: [CommonModule],
  templateUrl: './observable-examples.component.html',
  styleUrl: './observable-examples.component.css'
})
export class ObservableExamplesComponent {

  data:any[]=[];

  observable= new Observable((observer)=>{

     setTimeout(()=>{observer.next(85)},1000);
     setTimeout(()=>{observer.next(89)},2000);
     setTimeout(()=>{observer.next(185)},3000);
     setTimeout(()=>{observer.next(90)},4000);
     setTimeout(()=>{observer.complete()},3500)
    //  setTimeout(()=>{observer.error(new Error("Something went wrong"))},2500)
       

  });

  getData1()
  {
    this.observable.subscribe({
      next:(n)=>this.data.push(n),
      error:(error)=>{alert(error.message)},
      complete:()=>{alert("Data successfully retrieved")}
    })
  }

  getData2()
  {
    of(12,56,34,[12,34,45])
    .subscribe({
      next:(value)=>{this.data.push(value)},
      complete:()=>{console.log("Data emission completed")}
    })
  }

  getData3()
  {
    from([23,67,90])
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }

  getData4()
  {
  let subscription=  interval(1000)
    .subscribe({
      next:(value)=>this.data.push(value)
    })

  setTimeout(()=>{
    subscription.unsubscribe()
  },10000)

  }

  getData5()
  {
    from("I am learning Angular")
    .pipe(
      take(10),
      map(x=>x.toUpperCase()),
      filter(x=>x!=" ")

    )
    .subscribe({
      next:(value)=>this.data.push(value)
    })

  }


  getData7()
  {
    of(12,56,34,100)
    .pipe(
      mergeMap(n=>of(n)),
    
    )
    .subscribe({
      next:(value)=>console.log(value)
    })
    
  }

  getData8()
  {
    interval(2000)
    .pipe(
      map(n=>{
        if(n==3)
        {
           throw new Error("Something went wrong")
        }
        return n;
      }),
      retry(3),
      catchError((error)=>{
        console.log(error.message);
        return of(23,45,34,100)
        
      })
    )
    .subscribe({
      next:(value)=>this.data.push(value)
    })
  }

}

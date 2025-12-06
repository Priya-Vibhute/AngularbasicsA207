import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  isPrime(n:number)
  {
     let count=0;

     for(let i=2;i<=n/2;i++)
     {
        if(n%i==0)
        {
          count++;
        }
     }
   
     return count==0;

  }


}

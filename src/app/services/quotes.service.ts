import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

export interface Quotes 
{
    quotes:{id:number,quote:string,author:string}[]
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private httpClient: HttpClient) {}

  getQuotes() {
    return this.httpClient.get<Quotes>('https://dummyjson.com/quotes');
  }

  // filterByAuthorName("Abdul Kalam")
  filterByAuthorName(name: string) {
    return this.getQuotes().pipe(
      map(data=>data.quotes.filter(q=>q.author==name)),
    )
  }
}

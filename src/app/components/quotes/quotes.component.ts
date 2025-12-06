import { Component } from '@angular/core';
import { Quotes, QuotesService } from '../../services/quotes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css',
})
export class QuotesComponent {
  quotes!: Quotes;

  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
  this.getAllQuotes();
  }

  filterByAuthorName(name: string) {
    this.quoteService.filterByAuthorName(name).subscribe({
      next: (value) => (this.quotes.quotes = value),
    });
  }

  getAllQuotes() {
    this.quoteService.getQuotes().subscribe({
      next: (data) => (this.quotes = data),
    });
  }
}

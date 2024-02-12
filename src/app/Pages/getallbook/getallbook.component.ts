import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getallbook',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.css']
})
export class GetallbookComponent {
  books: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.http.get<any[]>('http://localhost:5186/api/Books').subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }

}

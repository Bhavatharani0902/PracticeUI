import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  bookId: number = 0;
  book: Book = {} as Book;
  errMsg: string = '';
  isBookExist: boolean = false;
  originalBook: Book = {} as Book;
  searchTerm: string = '';

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.bookId = params['id'];
      this.loadBookDetails();
    });
  }

  loadBookDetails() {
    this.http.get<Book>('http://localhost:5186/api/Books/' + this.bookId).subscribe(
      (response) => {
        console.log(response);
        if (response != null) {
          this.book = response;
          this.originalBook = { ...this.book };
          this.isBookExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Book Id';
          this.isBookExist = false;
        }
      },
      (error) => {
        console.error('Error loading book details:', error);
      }
    );
  }

  searchBook() {
    // Implement book search logic based on title
    if (this.searchTerm) {
      // Assuming you have a backend endpoint for searching books by title
      this.http.get<Book[]>('http://localhost:5186/api/Books/search/title/' + this.searchTerm).subscribe(
        (response) => {
          if (response && response.length > 0) {
            // Assuming you want to display the first matching book
            this.book = response[0];
            this.originalBook = { ...this.book };
            this.isBookExist = true;
            this.errMsg = '';
          } else {
            this.errMsg = 'Book not found';
            this.isBookExist = false;
          }
        },
        (error) => {
          console.error('Error searching for book:', error);
        }
      );
    }
  }
}
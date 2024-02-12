// addbook.component.ts

import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  newBook: any = {
    title: '',
    author: '',
    genre: '',
    isbn: '',
    publishDate: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addBook(): void {
    this.http.post<any>('http://localhost:5186/api/Books', this.newBook).subscribe(
      (response) => {
        console.log('Book added successfully:', response);
        // Navigate to getallbook component after successfully adding the book
        this.router.navigate(['/getallbook']);
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }

  resetForm(): void {
    this.newBook = {
      title: '',
      author: '',
      genre: '',
      isbn: '',
      publishDate: ''
    };
  }
}

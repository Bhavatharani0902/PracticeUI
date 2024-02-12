import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-search-by-author',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './search-by-author.component.html',
  styleUrl: './search-by-author.component.css'
})
export class SearchByAuthorComponent {
  author: string = '';
  searchResults: Book[] = [];

  constructor(private http: HttpClient, private router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((params) => (this.author = params['author']));
    console.log(this.author);
    this.search();
  }

  search() {
    this.http.get<Book[]>('http://localhost:5186/api/Books/search/author/' + this.author).subscribe(
      (response) => {
        this.searchResults = response;
      },
      (error) => {
        console.error('Error searching by author:', error);
      }
    );
  }
}

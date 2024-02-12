import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-search-by-genre',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './search-by-genre.component.html',
  styleUrl: './search-by-genre.component.css'
})
export class SearchByGenreComponent {
  genre: string = '';
  searchResults: Book[] = [];

  constructor(private http: HttpClient, private router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((params) => (this.genre = params['genre']));
    console.log(this.genre);
    this.search();
  }

  search() {
    this.http.get<Book[]>('http://localhost:5186/api/Books/search/genre/' + this.genre).subscribe(
      (response) => {
        this.searchResults = response;
      },
      (error) => {
        console.error('Error searching by genre:', error);
      }
    );
  }
}
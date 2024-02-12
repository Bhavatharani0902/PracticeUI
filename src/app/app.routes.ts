import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddbookComponent } from './Pages/addbook/addbook.component';
import { BookDetailsComponent } from './Pages/book-details/book-details.component';
import { EditbookComponent } from './Pages/editbook/editbook.component';
import { GetallbookComponent } from './Pages/getallbook/getallbook.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SearchByAuthorComponent } from './Pages/search-by-author/search-by-author.component';
import { SearchByGenreComponent } from './Pages/search-by-genre/search-by-genre.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'getallbook', component: GetallbookComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'editbook', component: EditbookComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'SearchByAuthor', component: SearchByAuthorComponent },
  { path: 'SearchByGenre', component: SearchByGenreComponent },
  { path: 'BookDetails', component: BookDetailsComponent },
  { path: '', component: HomeComponent },



  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'getallbook', component: GetallbookComponent },
      { path: 'SearchByAuthor', component: SearchByAuthorComponent },
      { path: 'SearchByGenre', component: SearchByGenreComponent },
      { path: 'BookDetails', component: BookDetailsComponent },
      
    ],
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'getallbook', component: GetallbookComponent },
      { path: 'addbook', component: AddbookComponent },
      { path: 'editbook', component: EditbookComponent },
    ],
  },
];

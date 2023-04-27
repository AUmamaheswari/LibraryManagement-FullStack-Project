import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';  
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ServiceComponent } from './service/service.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent,canActivate:[AuthGaurdService]  },
  {path: 'login', component: LoginComponent },
  {path: 'signin', component:SignInComponent},
  {path: 'books', component: BookListComponent,canActivate:[AuthGaurdService] },
  {path: 'create-books', component: CreateBooksComponent,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'update-book/:bookId', component: UpdateBookComponent,canActivate:[AuthGaurdService] },
  {path: 'book-details/:bookId', component: BookDetailsComponent,canActivate:[AuthGaurdService] },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
  {path: 'profile-card', component: ProfileCardComponent,canActivate:[AuthGaurdService]  },
  {path:'welcome',component:WelcomeComponent},
  {path:'feedback',component:FeedbackComponent,canActivate:[AuthGaurdService] },
  {path:'service',component: ServiceComponent,canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

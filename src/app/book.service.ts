import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/RestAPIProject/books";

  constructor(private httpClient: HttpClient) { }
  /*To get the list of books present in the database */

  /*This method is used to get a list of books from database*/
  getBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
  
  /*This method is used to add books to the database */
  createBooks(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  /*This method is used to fetch a particular book from the database by its bookid*/
  getBookById(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }

  /*This method is used to update a particular book  by passing the bookid along with the book */
  updateBook(bookId: number, book: Book): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${bookId}`,book);
  }

  /*This method is used to delete a particular book by bookid in the database with the help of baseURL*/
  deleteBook(bookId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }
  /*This method is used to remove all the records in the database with the help of baseURL*/
  deleteALL(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  /*This method is used to search a particular book by in the database with the help of baseURL*/
  findByName(bookName: any): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}?bookName=${bookName}`);
  }
  
  /*This method is used to find a booklist with the matching id in the database with the help of baseURL*/
  findByChildrens(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByChildrens`);
  }
  findByPoetry(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByPoetry`);
  }

  findByComics(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByComics`);
  }

  findByFiction(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByFiction`);
  }


}
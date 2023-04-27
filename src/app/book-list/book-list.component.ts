import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  bookName: string=" ";
 
  /*Constructor will be called and the reference types Router and book Service will be created*/
  constructor(private bookService: BookService,
    private router: Router) { }

    searchByName(){
      this.bookService.findByName(this.bookName).subscribe(
        data =>{
         this.books=data;
         console.log(data);
        },
        error=>{
          console.log(error);
        });
      }
  
    /*Whenever the class implements OnInit interface-->ngOnInit need to be override and it'll go to the getbooks method automatically*/ 
    ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;
    });
  }
/*This method is used to view the detail of a particular book 
and it will navigate to the router-->book-details with bookid */
  bookDetails(bookId: number) {
    this.router.navigate(['book-details', bookId]);
  }

  /*This method is used to update the detail of a particular book 
  and it will navigate to the router-->update book with bookid */
  updateBook(bookId: number) {
    this.router.navigate(['update-book', bookId]);
   
  }

  /*This method is used to delete the detail of a particular book 
  */
  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(data => {
      console.log(data);
      this.getBooks();
    })
  }
  removeAllBooks():void{
    this.bookService.deleteALL().subscribe(
    data =>{
      console.log(data);
      this.getBooks();
    },
    error => {
      console.log(error);

    });
    
  }

  
  confirmDelete(book: Book) {
    var status = confirm("Do you want to delete this record?");
    if (status == true) {
      this.deleteBook(book.bookId);
    }
    else {
      this.getBooks();
    }
  }

    confirmRemove():void {
    var status = confirm("Are you Sure  you want to remove all the Records.If once you remove all records it will removed from the database also and it will never fetched again.  ");
    if (status == true) {
      this.removeAllBooks();
    }
    else {
      return;
    }
  }
  
  
  ViewByComics(){
    this.bookService.findByComics().subscribe(data => {
        this.books=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }
  ViewByFiction(){
    this.bookService.findByFiction().subscribe(
      data => {
        this.books=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }
  ViewByPoetry(){
    this.bookService.findByPoetry().subscribe(
      data => {
        this.books=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }
  ViewByChildrens(){
    this.bookService.findByChildrens().subscribe(
      data => {
        this.books=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }


}







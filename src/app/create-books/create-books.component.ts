import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bookrecords',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  book: Book = new Book();
  bookName = '';
  authorName = '';
  genre = '';
  edition = '';
  genreId = '';
  noOfCopies = '';

  /*Constructor will be called and the reference types Router and book Service will be created*/
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }
/**this savebook method is used to add books to the booklist.*/
  saveBook() {
    this.bookService.createBooks(this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    },
      error => console.log(error));
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }


  /**If user doesn't fill any field this popup will come */
  onSubmit() {
    if (this.book.bookName === '' || this.book.authorName === '' || this.book.genre === '' || this.book.edition === 0 || this.book.genreId === 0 || this.book.noOfCopies === 0) {
      var status = confirm("It is mandatory to fill all the fields");
    }
    else {
      var status = confirm("Do you want to insert student records?");
      if (status == true) {

        console.log(this.book);
        this.saveBook();
      }
    }

  }




}

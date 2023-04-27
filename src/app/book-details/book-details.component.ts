import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId: number = 0;
  book: any = [];

  /*Constructor will be called and the reference types Activateroute and book Service will be created*/
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  /*Whenever the class implements OnInit interface-->ngOnInit need to be override and it'll called automatically*/ 
  ngOnInit(): void {
    this.bookId= this.route.snapshot.params['bookId'];

    this.book = new Book();
    this.bookService.getBookById(this.bookId).subscribe( data => {
      this.book = data;
    });
  }

}

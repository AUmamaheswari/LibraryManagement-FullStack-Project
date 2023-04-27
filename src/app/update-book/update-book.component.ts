import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

/*When the user click on update the record stored in the database will be shown in the respective field.
 *if user want to update any field in the update, first it will check the book present or not in the database 
 *by getbookbyid method that present in the bookservice.If the book is there it will do the further functions.
 * 
 */
export class UpdateBookComponent implements OnInit{

  bookId: number = 0;
  book: Book = new Book();

  
  
    /*Constructor will be called and the reference types Activateroute,book Service,Router will be created*/
    constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.bookId = this.route.snapshot.params['bookId'];
  
      this.bookService.getBookById(this.bookId).subscribe(data => {
        this.book = data;
      }, error => console.log(error));
    }


    onSubmit(){
      this.bookService.updateBook(this.bookId, this.book).subscribe( _data =>{
        this.goToBookList();
      }
      , error => console.log(error));
    }
  

  goToBookList(){
    this.router.navigate(['/books']);
  }
  /**Once the user click on submit this popup will come */
  confirmUpdate(){
    var status = confirm("Your record updated successfully!");
    if(status==true){
      this.bookService.updateBook(this.bookId, this.book).subscribe( _data =>{
        this.goToBookList();
      }
      , error => console.log(error));
    }
    else{
      this.router.navigate(['/books']);
    }
}
}

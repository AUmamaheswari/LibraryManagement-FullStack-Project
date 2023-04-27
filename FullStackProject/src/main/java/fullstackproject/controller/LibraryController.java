package fullstackproject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.ArrayList;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fullstackproject.exception.ResourceNotFoundException;
import fullstackproject.model.Library;
import fullstackproject.repository.LibraryRepository;


@CrossOrigin(origins ="http://localhost:4200")
@RestController//@ResponseBody and @Controller 
@RequestMapping("/RestAPIProject") //Here the RequestMapping is used in the Class level-->So it'll act as a base URL to the controller.
public class LibraryController {

	@Autowired//
	private LibraryRepository libraryRepository;

	/*/This GetMapping annotation is used to fetch records from database using find all method that present in JPA Repository
	@GetMapping("/books")
	public List getRecordsFromDb(){
		return libraryRepository.findAll();
	}*/

	//This PostMapping annotation is used to save records into the database using save method that present in JPA Repository
	@PostMapping("/books")
	public Library createLibraryRecords(@RequestBody Library library) {
		return libraryRepository.save(library);
	}

	/* This GetMapping annotation is used to fetch one specific record from database using findById 
	 * method that present in JPA Repository.At first it'll check any record is there 
	 * with the respected BookId if it is then it'll do the following opertion 
	 * If there is any exception  it'll throw exception-->here the exception is user defined-->So we can throw the object only.
	 */

	@GetMapping("/books/{BookId}")
	public Library searchById(@PathVariable int BookId) {
		return  libraryRepository.findById(BookId).orElse(null);

	}

	/* This PutMapping annotation is used to update a specific record in the database using findById method that present in JPA Repository.
	 * At first it'll check any record is there with the respected BookId if it is then it'll do the following opertion 
	 * If there is any exception it'll throw exception-->here the exception is user defined-->So we can throw the object only.
	 */
	@PutMapping("/books/{BookId}")
	public ResponseEntity<Library> updateBookDetails(@PathVariable int BookId, @RequestBody Library libraryRecordDetails){
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));



		library.setGenreId(libraryRecordDetails.getGenreId());
		library.setBookName(libraryRecordDetails.getBookName());
		library.setAuthorName(libraryRecordDetails.getAuthorName());
		library.setGenre(libraryRecordDetails.getGenre() );
		library.setEdition(libraryRecordDetails.getEdition());

		library.setNoOfCopies(libraryRecordDetails.getNoOfCopies());

		Library updatedRecords = libraryRepository.save(library);
		return ResponseEntity.ok(updatedRecords);
	}


	/* This DeleteMapping annotation is used to delete a specific record from database using findById method that present in JPA Repository.
	 * At first it'll check any record is there with the respected BookId if it is then it'll do the following opertion 
	 * If there is any exception  it'll throw exception-->here the exception is user defined-->So we can throw the object only.
	 */
	@DeleteMapping("/books/{BookId}")
	public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable int BookId){
		Library library = (Library) libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));

		libraryRepository.delete(library);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


	/*This GetMapping annotation is used to get a book by book name.It will look for a book with respective book name
	 * -->if it'll there then the particular book will be fetched from database and it'll return http status code as ok.
	 * Or else if the book will not there it will return all the records from database using findAll method that present 
	 * in the JPARepository.If there is any exception  it'll through the exception as null and http status as Internal Server Error*/
	@GetMapping("/books")
	public ResponseEntity<List<Library>> getAllBooks(@RequestParam(required = false) String  bookName){
		try {
			List<Library> booklist =new ArrayList<Library>();
			if( bookName !=null) {
				libraryRepository.findByBookNameContaining(bookName).forEach(booklist::add);
				return new ResponseEntity<>(booklist,HttpStatus.OK);
			}
			else {
				booklist = libraryRepository.findAll();
				return new ResponseEntity<>(booklist,HttpStatus.OK);
			}
		}catch (Exception e) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/*This DeleteMapping annotation is used to delete all the records from database using deleteAll method that present in 
	 * the JPARepository and it'll return the http status as no content.If there is any exception  it'll through the exception as null and 
	 * http status as Internal Server Error */
    @DeleteMapping("/books")
	public ResponseEntity<HttpStatus> deleteAllbooks() {
		try {
			libraryRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

/*This GetMapping annotation is used to fetch a books from database by GenreID and the genreid will be passed to the method findbyid 
 * if its there it'll return the booklist with http status code as ok. If it is empty it'll return http status as no content.
 * If there is any exception it'll through the exception as null and  http status as Internal Server Error */
    @GetMapping("/books/viewByFiction")
	public ResponseEntity<List<Library>> viewFiction() { 
		try {
			List<Library> deptBookList=libraryRepository.findBygenreId(1);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}



	@GetMapping("/books/viewByComics")
	public ResponseEntity<List<Library>> viewComics() { 
		try {
			List<Library> deptBookList=libraryRepository.findBygenreId(2);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}



	@GetMapping("/books/viewByPoetry")
	public ResponseEntity<List<Library>> viewPoetry() { 
		try {
			List<Library> deptBookList=libraryRepository.findBygenreId(3);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@GetMapping("/books/viewByChildrens")
	public ResponseEntity<List<Library>> viewChildrens() { 
		try {
			List<Library> deptBookList=libraryRepository.findBygenreId(4);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}	



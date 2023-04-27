
package fullstackproject.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="LibraryManagementDetails")
public class Library {

	// attributes--->column name of the table
	@Id // primary key of the table
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BookId",length=4)
	private Integer bookId;
	
	@Column(name = "GenreId",length=4,nullable = false)
	private Integer genreId;
	
	@Column(name = "BookName",length=50, nullable = false)
	private String bookName;

	@Column(name = "AuthorName",length=50, nullable = false)
	private String authorName;

	@Column(name = "Genre",length=50,nullable = false)
	private String genre;
	
	@Column(name = "Edition", nullable = false)
	private Integer edition;

	@Column(name = "NoOfCopies", nullable = false)
	private Integer noOfCopies;



	public Library() {

	}



	public Library(Integer bookId, Integer genreId, String bookName, String authorName, String genre, Integer edition,
			Integer noOfCopies) {
		super();
		this.bookId = bookId;
		this.genreId = genreId;
		this.bookName = bookName;
		this.authorName = authorName;
		this.genre = genre;
		this.edition = edition;
		this.noOfCopies = noOfCopies;
	}



	@Override
	public String toString() {
		return "Library [bookId=" + bookId + ", genreId=" + genreId + ", bookName=" + bookName + ", authorName="
				+ authorName + ", genre=" + genre + ", edition=" + edition + ", noOfCopies=" + noOfCopies + "]";
	}



	public Integer getBookId() {
		return bookId;
	}



	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}



	public Integer getGenreId() {
		return genreId;
	}



	public void setGenreId(Integer genreId) {
		this.genreId = genreId;
	}



	public String getBookName() {
		return bookName;
	}



	public void setBookName(String bookName) {
		this.bookName = bookName;
	}



	public String getAuthorName() {
		return authorName;
	}



	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}



	public String getGenre() {
		return genre;
	}



	public void setGenre(String genre) {
		this.genre = genre;
	}



	public Integer getEdition() {
		return edition;
	}



	public void setEdition(Integer edition) {
		this.edition = edition;
	}



	public Integer getNoOfCopies() {
		return noOfCopies;
	}



	public void setNoOfCopies(Integer noOfCopies) {
		this.noOfCopies = noOfCopies;
	}



	
	
}
	

	
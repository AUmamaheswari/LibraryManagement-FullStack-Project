
package fullstackproject.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fullstackproject.model.Library;

//Interface extending the JPARepository Interface
public interface LibraryRepository extends JpaRepository<Library, Integer> {

	List<Library> findByBookNameContaining(String bookName);
	List<Library> findBygenreId(int genreId);

}







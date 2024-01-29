import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import teacher_code.hash_table.Movie;

public class MovieTest {
    @Test
    public void testEqualityOfMovies() {
        Movie movie1 = new Movie("movie", 100);
        Movie movie2 = new Movie("movie", 100);
        Movie movie3 = new Movie("movie", 101);
        Movie movie4 = new Movie("movie4", 100);

        Assertions.assertTrue(movie1.equals(movie2), "movie1.equals(movie2) are equals");
        Assertions.assertFalse(movie1.equals(movie3), "movie1.equals(movie3) are not equals");
        Assertions.assertFalse(movie1.equals(movie4), "movie1.equals(movie4) are not equals");

        Assertions.assertFalse(movie1.equals(null));
    }

    @Test
    public void testHashCodes() {
        Movie movie1 = new Movie("movie", 100);
        Movie movie2 = new Movie("movie", 100);
        Movie movie3 = new Movie("movie", 101);
        Movie movie4 = new Movie("movie4", 100);

        Assertions.assertTrue(movie1.equals(movie2), "movie1.equals(movie2) are equals");
        Assertions.assertFalse(movie1.equals(movie3), "movie1.equals(movie3) are not equals");
        Assertions.assertFalse(movie1.equals(movie4), "movie1.equals(movie4) are not equals");

        Assertions.assertFalse(movie1.equals(null));
    }
}

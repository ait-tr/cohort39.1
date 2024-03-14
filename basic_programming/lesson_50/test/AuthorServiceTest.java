import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import student_code.models.Author;
import student_code.services.AuthorService;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class AuthorServiceTest {
    @Test
    void testCreateValidAuthor() throws FileNotFoundException {
        String pathToFile = "/Users/imiftakhov/Desktop/Java/AIT-TR/cohort39.1/basic_programming/lesson_50/test/test_add_author.txt";
        File file = new File(pathToFile);

        Scanner scanner = new Scanner(file);

        AuthorService authorService = new AuthorService(scanner);

        Author author = authorService.addAuthor();

        Assertions.assertEquals("ilias", author.getName());
    }
}

package practice.interfaces;

import practice.models.Author;

import java.util.Set;

//Управление авторами (добавление, поиск, обновление, удаление).
public interface AuthorRepository {
    void addAuthor(Author author);

    boolean removeAuthor(Author author);

    Set<Author> findAllAuthors();
}

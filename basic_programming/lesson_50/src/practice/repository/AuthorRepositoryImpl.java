package practice.repository;

import practice.interfaces.AuthorRepository;
import practice.models.Author;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class AuthorRepositoryImpl implements AuthorRepository {
    private Set<Author> authors;

    public AuthorRepositoryImpl() {
        authors = new HashSet<>();
    }

    public AuthorRepositoryImpl(Collection<Author> authors) {
        this.authors = new HashSet<>(authors);
    }

    @Override
    public void addAuthor(Author author) {
        if (authors.contains(author)) {
            System.out.println("Author already exists");
        } else {
            authors.add(author);
        }
    }

    @Override
    public boolean removeAuthor(Author author) {
        return authors.remove(author);
    }

    @Override
    public Set<Author> findAllAuthors() {
        return authors;
    }
}

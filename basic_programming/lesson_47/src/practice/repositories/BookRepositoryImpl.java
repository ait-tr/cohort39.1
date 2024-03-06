package practice.repositories;

import practice.interfaces.BookRepository;
import practice.models.Book;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class BookRepositoryImpl implements BookRepository {
    private List<Book> books;

    public BookRepositoryImpl() {
        books = new ArrayList<>();
    }

    public BookRepositoryImpl(Collection<Book> books) {
        this.books = new ArrayList<>(books);
    }

    @Override
    public void addBook(Book book) {
        books.add(book);
    }

    @Override
    public List<Book> findAllBooks() {
        return books;
    }

    @Override
    public boolean removeBook(Book book) {
        return books.remove(book);
    }
}

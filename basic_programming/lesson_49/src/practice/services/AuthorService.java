package practice.services;

import practice.interfaces.AuthorRepository;
import practice.repository.AuthorRepositoryIml;

public class AuthorService {
    private AuthorRepository repository;

    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public AuthorService() {
        repository = new AuthorRepositoryIml();
    }


}

package practice.services;

import practice.interfaces.CommentRepository;
import practice.repository.CommentRepositoryIml;

public class CommentService {
    private CommentRepository repository;

    public CommentService() {
        this.repository = new CommentRepositoryIml();
    }

    public CommentService(CommentRepository repository) {
        this.repository = repository;
    }
}

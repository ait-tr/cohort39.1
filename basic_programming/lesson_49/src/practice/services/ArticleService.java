package practice.services;

import practice.interfaces.ArticleRepository;
import practice.repository.ArticleRepositoryIml;

public class ArticleService {
    private ArticleRepository repository;

    public ArticleService() {
        repository = new ArticleRepositoryIml();
    }

    public ArticleService(ArticleRepository repository) {
        this.repository = repository;
    }
}

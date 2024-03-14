package practice.services;


import practice.interfaces.ArticleRepository;
import practice.models.Article;
import practice.models.Author;
import practice.repository.ArticleRepositoryImpl;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

//ArticleService: Логика работы со статьями, включая создание, поиск по критериям, обновление и удаление.

/**
 * сервисный класс для взаимодействия с классом Article. Отвечает за операции логической валидации добавления, удаления
 * и обновления Article из репозитория.
 *
 * @see Article
 * @see ArticleRepository
 * @see ArticleRepositoryImpl
 * @see AuthorService
 * @see CommentService
 */
public class ArticleService {
    private ArticleRepository repository;

    // AuthorService - используется для взаимодействия с AuthorService,
    // и получения валидных данных при создании комментариев
    private AuthorService authorService;
    private CommentService commentService;

    /**
     * конструктор по умолчанию, используется в случае, если нет спецефической реализации для ArticleRepository, в этом
     * случае инициализируется дефолтный репозиторий  - ArticleRepositoryImpl.
     */
    public ArticleService() {
        repository = new ArticleRepositoryImpl();
    }


    /**
     * Данный конструктор используется в случае, если приложение имеет не дефолтную реализацию репозитория
     * @param repository
     */
    public ArticleService(ArticleRepository repository) {
        this.repository = repository;
    }

    // добавила эти 2 метода, тк без них выходит NullPointerException при добавлении статьи и комментария в приложении
    public void setAuthorService(AuthorService authorService) {
        this.authorService = authorService;
    }

    public void setCommentService(CommentService commentService) {
        this.commentService = commentService;
    }

    public void addArticle(Scanner scanner) {
        System.out.println("Title:");
        String title = scanner.nextLine();

        System.out.println("Content:");
        String content = scanner.nextLine();

        // по ID у меня не получилось найти автора, попробую сделать через поиск по имени

//        System.out.println("Author ID:");
//        Author author = authorService.findAuthorByID(scanner.nextInt());

        // поиск по имени
        System.out.println("Author name:");
        Author author = authorService.findAuthorByName(scanner.nextLine());

        repository.addArticle(new Article(title, content, author));
    }

    public void deleteArticle(Article article) {
        if (repository.removeArticle(article)) {
            System.out.println(article.toString() + "was successfully deleted");
        } else {
            System.out.println(article.toString() + "is not existing");
        }
    }

    /**
     * Метод используется для обновления заголовка статьи. Для корректной работы метода требуется ввести существующий
     * ID статьи, которая будет обновлена.
     * @param scanner используется сканнер для взаимодействия с тем же источником ввода, что и в слое представления
     * @throws RuntimeException выбрасывается в случае, если указан не верный id статьи
     */
    public void updateArticleTitle(Scanner scanner) {
        System.out.println("Write article ID:");
        Article article = findArticleByID(scanner.nextInt());
        scanner.nextLine();

        if (article == null) {
            throw new RuntimeException("Incorrect Article ID");
        }

        if (article == null) {
            System.out.println("Article with this ID doesnt exist");
        } else {
            System.out.println("Write new titel:");
            article.setTitle(scanner.nextLine().trim());
        }
    }

    public void updateArticleContent(Scanner scanner) {
        System.out.println("Write article ID:");
        Article article = findArticleByID(scanner.nextInt());
        scanner.nextLine();

        if (article == null) {
            System.out.println("Article with this ID doesnt exist");
        } else {
            System.out.println("Write new content:");
            article.setContent(scanner.nextLine());
        }
    }

    /**
     *
     * @return возвращает сет статей всех существующих статей
     */
    public Set<Article> findAllArticles() {
        return repository.findAllArticles();
    }

    public Article findArticleByID(int id) {
        for (Article article : repository.findAllArticles()) {
            if (article.getID() == id) {
                return article;
            }
        }
        return null;
    }


    public Article findArticlesByTitel(String titel) {
        for (Article atricle : repository.findAllArticles()) {
            if (atricle.getTitle().equals(titel.trim())) {
                return atricle;
            }
        }
        return null;
    }

    // дописала этот метод чтобы работало public Set<Comment> findAllCommentsByArticleTitel(Scanner scanner) в классе CommentService
    public Article findArticlesByTitel(Scanner scanner) {
        System.out.println("Write titel of article to find its comments: ");
        String titel = scanner.nextLine();

        for (Article atricle : repository.findAllArticles()) {
            if (atricle.getTitle().equals(titel.trim())) {
                return atricle;
            }
        }
        return null;
    }

    public Set<Article> findArticlesByAuthor(Scanner scanner) {
        Set<Article> articlesByAuthor = new HashSet<>();
        System.out.println("Write author name to find his articles");
        String authorName = scanner.nextLine();
        Author author = authorService.findAuthorByName(authorName);
        for (Article article : repository.findAllArticles()) {
            if (article.getAuthor().equals(author)) {
                articlesByAuthor.add(article);
            }
        }
        return articlesByAuthor;
    }
}

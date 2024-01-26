package teacher_code.language_card;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

/**
 * Cards - класс для практики использования структуры данных Map <p>
 * <p>
 * приложение для изучения иностранных слов - карт, хранит слово на иностранном языке в виде ключа и его перевод в виде
 * значения.
 */
public class Cards {
    private HashMap<String, String> words;
    private static Scanner scanner = new Scanner(System.in);
    private HashSet<String> incorrectWords = new HashSet<>();

    public void addNewWords() {
        while (true) {
            addNewWord();
            System.out.println("Хотите ли добавить еще одну пару слов? да/нет");
            if ("нет".equalsIgnoreCase(scanner.nextLine().trim())) {
                break;
            }
        }
    }

    private void addNewWord() {
        System.out.println("Введите значение для нового слова: ");
        String key = scanner.nextLine().trim().toUpperCase();

        System.out.println("Введите перевод для нового слова: ");
        String value = scanner.nextLine().trim().toUpperCase();

        // в случае, если такой ключ уже существует, а значение отличвется,
        // то мы просим пользователя подтвердиь ввод:
        if (words.containsKey(key) && !value.equals(words.get(key))) {
            System.out.println("Карточка с таким словом уже существует, и меет альтернативный перевод: " +
                    words.get(key) + ". Хотите ли вы заменить занную карточку новым значением? да/нет");
            if ("да".equalsIgnoreCase(scanner.nextLine())) {
                words.put(key, value);
            }
        } else {
            words.put(key, value);
        }
    }

    public void checkKnowledge() {
        for (String key : words.keySet()) {
            System.out.println("Пожалуйста введите перевод для слова " + key);
            String answer = scanner.nextLine().trim().toUpperCase();

            // проеврка ответа
            if (answer.equalsIgnoreCase(words.get(key))) {
                System.out.println("Ответ верный!");
            } else {
                incorrectWords.add(key);
            }
        }
    }

    public void checkDifficultWords(){
        System.out.println("Начинаем повторение сложных слов:");
        for (String key : incorrectWords) {
            System.out.println("Пожалуйста введите перевод для слова " + key);
            String answer = scanner.nextLine().trim().toUpperCase();

            // проверка ответа
            if (answer.equalsIgnoreCase(words.get(key))) {
                System.out.println("Ответ верный! Хотите ли вы оставить это слово для повторной проверки в списке " +
                        "сложных слов или удалить из этого списка? удалить/оставить");

                if ("удалить".equalsIgnoreCase(scanner.nextLine().trim())) {
                    incorrectWords.remove(key);

                    if (incorrectWords.contains(key)) {
                        System.out.println("произошла ошибка удаления");
                    }
                } else {
                    System.out.println("Слово " + key + " все еще оставлено в списке сложных слов");
                }
            }
        }
    }

    public void addWordToIncorrectSet() {
        // подумать над логикой добавления слова, которого пока нет в мапе:
        System.out.println("Введите слово, которое вы хотите чаще практиковать:");
        String key = scanner.nextLine().trim().toUpperCase();
        incorrectWords.add(key);

    }

}

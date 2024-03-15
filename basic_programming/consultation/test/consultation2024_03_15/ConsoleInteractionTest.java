package consultation2024_03_15;
import consultation2024_03_15.teachers_sandbox.ConsoleInteraction;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Класс для тестирования взаимодействия с консолью.
 * Данный класс демонстрирует, как можно тестировать методы, работающие со стандартным вводом и выводом.
 */
class ConsoleInteractionTest {
    private final ByteArrayOutputStream outContent = new ByteArrayOutputStream(); // Поток для захвата вывода
    private final PrintStream originalOut = System.out; // Исходный System.out
    private final ByteArrayInputStream inContent = new ByteArrayInputStream("Blue\n".getBytes()); // Поток для имитации ввода
    private final InputStream originalIn = System.in; // Исходный System.in

    /**
     * Метод, выполняющийся перед каждым тестом.
     * Перенаправляет стандартный ввод и вывод на тестовые потоки.
     */
    @BeforeEach
    void setUpStreams() {
        System.setOut(new PrintStream(outContent));
        System.setIn(inContent);
    }

    /**
     * Метод, выполняющийся после каждого теста.
     * Восстанавливает исходные стандартный ввод и вывод.
     */
    @AfterEach
    void restoreStreams() {
        System.setOut(originalOut);
        System.setIn(originalIn);
    }

    /**
     * Тест, проверяющий поведение метода askQuestion.
     * Убеждается, что метод корректно читает ввод и выводит ожидаемый текст.
     */
    @Test
    void testAskQuestion() {
        new ConsoleInteraction().askQuestion();

        // Проверяем, что вывод содержит заданный вопрос и ответ на него
        assertTrue(outContent.toString().contains("What is your favorite color?"));
        assertTrue(outContent.toString().contains("Your favorite color is Blue"));
    }
}

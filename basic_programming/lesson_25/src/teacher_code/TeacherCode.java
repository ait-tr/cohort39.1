package teacher_code;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TeacherCode {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter number:");
        int x;

        try {
            // блок кода, который может вызвать исключение
            x = scanner.nextInt();

        } catch (InputMismatchException exception) {
            // блок кода для обработки исключения
            // метод getMessage(); - вернет нам строку, содержащую информацию об этой ошибке.
            String exceptionMessage = exception.getMessage();

            // метод printStackTrace() - выведет сообщение об ошибке в консоль
            exception.printStackTrace();

            // подобные вещи допустимы джавой, но не желательны, обычно в блоке catch должна быть
            // лишь логика обработки исключения
            x = -1;
        }
        // желательно, но не обязательно указывать конкретный тип
        // исключения (InputMismatchException ex), можно обобщить и указать родительский класс,
        // например RuntimeException или просто Exception


        System.out.println("FINISH");
    }
}





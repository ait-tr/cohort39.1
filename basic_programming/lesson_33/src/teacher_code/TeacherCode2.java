package teacher_code;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class TeacherCode2 {

    public static void main(String[] args) {
        tryFileInputStream();
    }

    public static void tryWithResources() {
        File file = new File("basic_programming/lesson_33/src/teacher_code/file.txt");

        // подобная конструкция называется try with resources,
        // в данной конструкции в круглых скобках блока try указывается операция,
        // которая может привести к ошибке, обрабатываемой в блоке  catch.
        // Данная конструкция актуальна, если следует выполнить код разово,
        // проинициализировав предварительно что-то, что может вызывать исключения.
        // Также данная конструкция более ресурсоэкономна, тк после завершения try-catch
        // не надо думать об освобождении ресурсов.

        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNext()) {
                System.out.println("Text from file:  " + scanner.nextLine());
            }
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }

    public static void readFileWithScanner() {
        File file = new File("basic_programming/lesson_33/src/teacher_code/file.txt");

        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNext()) {
                System.out.println("Text from file:  " + scanner.nextLine());
            }

        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }

    public static void tryFileInputStream() {
        try (FileInputStream fis = new FileInputStream("basic_programming/lesson_33/src/teacher_code/file.txt")) {
            int i;
            while ((i = fis.read()) != -1) {
                System.out.println((char) i);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

package teacher_code;


import java.io.File;
import java.io.IOException;
import java.util.Arrays;

public class TeacherCode {
    public static void main(String[] args) throws IOException {
        String path = "basic_programming/lesson_33/src/teacher_code/file.txt";
        String unexistedPath = "basic_programming/lesson_33/src/teacher_code/file_1.txt";
        String dirPath = "basic_programming/lesson_33/src/teacher_code/";

        // абсолютный путь - путь к файлу от вашего компьютера.
        // абсолютный путь актуален в случае, если файл находится за пределами репозитория, в котором происходит
        // разработка
        // /Users/imiftakhov/Desktop/Java/AIT-TR/cohort39.1/basic_programming/lesson_33/src/teacher_code/file.txt

        // в случае, если файл находится в том же репозитории, актуальней взять путь от корня репозитория

        // класс File - описывает объект "файл" в системе jvm
        File file = new File(path);
        File dir = new File(dirPath);

        File unexistedFile = new File(unexistedPath);

        // метод exists() - проверяет существует ли файл
        System.out.println("file.exists() = " + file.exists());

        // возвращает абсолютный путь до этого файла
        System.out.println("file.getAbsolutePath() = " + file.getAbsolutePath());

        System.out.println("file.length() = " + file.length());


        // два метода проверяющие, что файл является файлом или директорией
        System.out.println("file.isFile() = " + file.isFile());
        System.out.println("file.isDirectory() = " + file.isDirectory());

        System.out.println("dir.isFile() = " + dir.isFile());
        System.out.println("dir.isDirectory() = " + dir.isDirectory());

        // false - если данный файл уже существовал
        System.out.println("file.createNewFile() = " + file.createNewFile());

        // true - если файла не было и мы его создали успешно
        System.out.println("unexistedFile.createNewFile() = " + unexistedFile.createNewFile());

        // true - если файл был удален
        System.out.println("unexistedFile.delete() = " + unexistedFile.delete());

        System.out.println("file.listFiles() = " + file.listFiles());
        System.out.println("dir.listFiles() = " + Arrays.toString(dir.listFiles()));
    }
}

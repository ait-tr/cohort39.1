package teacher_code;

import practice.IncorrectFloorNumberException;

public class TeacherCode2 {
    public static void main(String[] args) {



    }

    // throws - выбрасывает, те буквально, метод "setFloor" выбрасывает исключение "IncorrectFloorNumberException"
    // если бы, IncorrectFloorNumberException унаследовался от одного из RuntimeException, то он бы относился к
    // unchecked exception и не было бы потребности указывать в сигнатуре метода, о том,
    // что данный метод может приводить к подобной ошибке
    static void setFloor(int floor) throws IncorrectFloorNumberException {
        if (floor == 13) {
            IncorrectFloorNumberException exception = new IncorrectFloorNumberException("13 этажа быть не должно!");
            // throw - выбрось, то есть буквально "выбрось новое IncorrectFloorNumberException"
            throw exception;

            // непроверяемое исключение (unchecked exception), оно не требует указания в сигнатуре метода
            // throw new RuntimeException("message");
        } else if (floor > 5) {
            // new IncorrectFloorNumberException("Здание не должно быть выше 15 этажей!") -
            // экземпляр класса IncorrectFloorNumberException
            throw new IncorrectFloorNumberException("Здание не должно быть выше 15 этажей!");
        }
    }




    public static void example() {
        // прилоение переводчик
        // - загрузите файл пдф, ворд и тп
        // - пользователь загружает архив с такими файлами
        try {
            // попытка прочесть то что там загрузил пользователь
        } catch (Exception ex) {
            // обработка исключений, если пользователь отправил некорректный файл
            // или файл закрыт паролем и чтение недоступно
        }



        // попытка отправить огромный файл
        try {
            // пытаемся отправить данный файл
        } catch (Exception ex) {
            // сетевое подключение прервалось и файл не отправился

        }
    }
}

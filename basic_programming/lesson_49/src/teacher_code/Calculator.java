package teacher_code;

public class Calculator {
    // подобный приватный конструктор нужен для того,
    // чтобы запретить создавать экземпляры класса за пределами этого класса,
    // так как в этом классе имеются исключительно статические методы,
    // не требующие создания экземпляров.
    private Calculator() {
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int mult(int a, int b) {
        return a * b;
    }

    //...
}

package teacher_code;

public class TeacherCode2 {
    static int counter = 0;

    public static void main(String[] args) {
        directRecursive();
    }

    static void directRecursive() {
        System.out.print(counter + " ");
        counter++;
        directRecursive();
    }
}

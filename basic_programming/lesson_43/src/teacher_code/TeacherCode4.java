package teacher_code;

public class TeacherCode4 {
    public static void main(String[] args) {
        Thread t1 = new ThreadExample1();
        Runnable t2 = new ThreadExample2();

        // метод run() - всего лишь запустит код из этого метода, но без создания новго потока
//        t1.run();
//        t2.run();

        // для создания нового потока, надо воспользоваться методом start()
        t1.start();
        new Thread(t2).start();


        System.out.println("======= MAIN =======");
    }
}

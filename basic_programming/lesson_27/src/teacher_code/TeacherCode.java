package teacher_code;

import java.util.ArrayList;
import java.util.List;

public class TeacherCode {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};

        ArrayList<String> stringArrayList = new ArrayList<>(1000);

        stringArrayList.add("one");
        stringArrayList.add("two");
        stringArrayList.add("three");

        // {one, two, three}
        //   0     1     2
        stringArrayList.get(1);

        for (int i = 0; i < stringArrayList.size(); i++) {
            System.out.print(stringArrayList.get(i) + " ");
        }
        System.out.println();

        stringArrayList.add(null);

        // метод List.of позволяет создать неизменяемую коллекцию из элементов,
        // то есть из нее ничего нельзя удалить или добавить
        List<String> immutableArrayList = List.of("four", "five", "six");

        try {
            immutableArrayList.add("seven");

        } catch (UnsupportedOperationException exception) {
            if (exception.getMessage() != null) {
                System.out.println(exception.getMessage());
            } else {
                System.out.println("не получилось добавить новый элемент");
            }
        }

        stringArrayList.addAll(immutableArrayList);



        for (int i = 0; i < stringArrayList.size(); i++) {
            System.out.print(stringArrayList.get(i) + " ");
        }
        System.out.println();

    }

}





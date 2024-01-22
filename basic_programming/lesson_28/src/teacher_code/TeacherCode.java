package teacher_code;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Scanner;

public class TeacherCode {
    public static void main(String[] args) {



        ArrayList<Integer> list = new ArrayList<>();

        list.add(1);
        list.add(2);
        list.add(3);

        // [1, 2, 3]
        //_______________________________


        LinkedList<Integer> linkedList = new LinkedList<>();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(43);

        // (1) -> (2) -> (3) -> (43) -> null

        NodeExample first = new NodeExample(22); // data = 22; next = null
        NodeExample second = new NodeExample(33); // data = 33; next = null

        first.next = second;// data = 22; next = second
        // second: data = 33; next = null

        tryLinkedNode();

    }

    static void tryLinkedNode() {
        Scanner scanner = new Scanner(System.in);

        NodeExample first = new NodeExample();
        NodeExample temp = new NodeExample();

        first.next = temp; // first (0) -> temp (0) -> null

        while (scanner.hasNextInt()) {
            NodeExample scannerNode = new NodeExample(scanner.nextInt());
            temp.next = scannerNode;
        }

        temp = first;
        while (temp.next != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }


    }

}





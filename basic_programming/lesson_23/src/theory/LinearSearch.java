package theory;

import java.util.ArrayList;
import java.util.Random;

public class LinearSearch {

    public static void main(String[] args) {
        Integer[] array = createRandomNotSortedArray(1000);
        int element = 12;

        // System.nanoTime() - возвращает текщее время в наносекнудах
        long startSearching = System.nanoTime();

        int index = linearSearch(array, element);

        long endSearching = System.nanoTime();

        if (index == -1) {
            System.out.printf("Линейный поиск в неотсортированном массиве длинной %d занял %d нс, " +
                    "элемент не был найден\n", array.length, endSearching - startSearching);
        } else {
            System.out.printf("Линейный поиск в неотсортированном массиве длинной %d занял %d нс, " +
                    "элемент был найден\n", array.length, endSearching - startSearching);
        }
    }


    public static int  linearSearch(Integer[] array, int element ) {
        int index = -1; // если элемента нет в массиве

        // реализация линейного поиска

        return index;
    }

    private static Integer[] createRandomNotSortedArray(int arrayLength) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        Random random = new Random();
        int size = arrayList.size(); // 0

        // заполняем массив лишь уникальными элементами, повторяем до тех пор, пока не будет полностью заполнен
        while (size < arrayLength){
            int randomNumber = random.nextInt(0, 1001);
            if (!arrayList.contains(randomNumber)) {
                arrayList.add(randomNumber);
                size = arrayList.size(); // эквивалентно size++;
            }
        }

        return arrayList.toArray(new Integer[0]);
    }
}

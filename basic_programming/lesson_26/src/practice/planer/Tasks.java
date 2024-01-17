package practice.planer;

import java.util.Arrays;

public class Tasks<T> {
    private T[] array;

    public Tasks(T[] array) {
        this.array = array;
    }

    public Tasks() {
        array = (T[]) new Object[0];
    }

    // метод добавления нового элемента с расширением массива
    public void addTask(T t) {
        // ...
        // [1, 2, 3] + 4 -> [1, 2, 3, 0] + 4 -> [1, 2, 3, 0]
        array = Arrays.copyOf(array, array.length + 1);
        array[array.length - 1] = t;
    }

    // метод удаления элемента из массива с сокращением размера массива
    public void removeTask(T t) throws TaskException {
        if (!contain(t)) {
            throw new TaskException("данной задачи нет в списке дел!");
        }



    }

    public boolean contain(T t) {
        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(t)) {
                return true;
            }
        }

        return false;
    }
}

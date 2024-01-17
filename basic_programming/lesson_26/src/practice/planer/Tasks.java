package practice.planer;

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
    }

    // метод удаления элемента из массива с сокращением размера массива
    public void removeTask(T t) {

    }

    public boolean contain(T t) {

        return false;
    }
}

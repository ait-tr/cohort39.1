package teacher_code;

import java.util.Arrays;

public class TeacherCode {
    // массив для кеширования значений факториала
    private static int[] factorialValues = {0, 1};

    public static void main(String[] args) {
        // n! = n * (n - 1) * (n - 2) *... * 1;
        // {0, 1, 2, 6, 24, 120}

        System.out.println(cacheFactorialIterative(5));
        System.out.println(cacheFactorialIterative(3));
        System.out.println(cacheFactorialIterative(4));

    }

    // time capacity = from O(1) to O(n)
    // space capacity = O(n) тк мы увеличиваем размер массива factorialValues
    public static int cacheFactorialIterative(int number) {
        if (number < 0) {
            return -1;
        }

        if (factorialValues.length >= number) {
            return factorialValues[number];
        }

        int result = 1;

//        for (int i = 1; i <= number; i++) {
//            result *= i;
//        }
//        -> оптимизируем данный цикл, с учетом уже имеющихся значений, дополняя новыми:

        // увеличиваем размер массива, чтобы записать туда новые значения
        // допустим, factorialValues уже имеет закешированные значения {0, 1, 2, 6},
        // но теперь мы хотим вычислить факториал 5, тогда:
        // tempArray = {0, 1, 2, 6, 24, 120}
        int[] tempArray = Arrays.copyOf(factorialValues, number + 1);

        // это сделано для того, чтобы:
        for (int i = factorialValues.length; i <= number; i++) {
            tempArray[i] = tempArray[i - 1] * i;
        }

        factorialValues = tempArray;

        return factorialValues[number];
    }


    // time capacity = O(n)  space capacity = O(1)
    public static int factorialIterative(int number) {
        if(number < 0) {
            return -1;
        } else if (number == 0) {
            return 0;
        }

        int result = 1;

        for (int i = 1; i <= number; i++) {
            result *= i;
        }

        return result;
    }

}





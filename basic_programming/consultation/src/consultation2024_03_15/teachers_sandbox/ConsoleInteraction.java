package consultation2024_03_15.teachers_sandbox;

import java.util.Scanner;

public class ConsoleInteraction {
    public void askQuestion() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your favorite color?");
        String color = scanner.nextLine();
        System.out.println("Your favorite color is " + color);
    }
}


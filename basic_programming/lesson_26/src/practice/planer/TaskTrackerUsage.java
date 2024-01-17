package practice.planer;

public class TaskTrackerUsage {

    public static void main(String[] args) {

    }

    public static void usageWithString() {
        Tasks<String> taskList = new Tasks<>();

        System.out.println(taskList.toString());

        taskList.addTask("сходить на урок Java Basic");
        taskList.addTask("убраться дома");
        taskList.addTask("Выполнить домашку аит");
        taskList.addTask("дописать тесты для приложения");

        System.out.println(taskList.toString());

        try {
            taskList.removeTask("убраться дома");
        } catch (TaskException e) {
            System.out.println(e.getMessage());
        }

        System.out.println(taskList.toString());

    }
}

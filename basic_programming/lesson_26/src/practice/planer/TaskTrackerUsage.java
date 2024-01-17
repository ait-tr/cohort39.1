package practice.planer;

public class TaskTrackerUsage {

    public static void main(String[] args) {
        Tasks<Task> taskList = new Tasks<>();

        System.out.println(taskList.toString());

        taskList.addTask(new Task("сходить на урок Java Basic"));
        taskList.addTask(new Task("убраться дома"));
        taskList.addTask(new Task("Выполнить домашку аит"));
        taskList.addTask(new Task("дописать тесты для приложения"));

        System.out.println(taskList.toString());

        taskList.get(1).changeTaskStatus();

        System.out.println(taskList.toString());

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

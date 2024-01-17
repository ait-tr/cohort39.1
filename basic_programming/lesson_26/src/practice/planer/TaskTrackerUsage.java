package practice.planer;

public class TaskTrackerUsage {

    public static void main(String[] args) {
        Tasks<String> taskList = new Tasks<>();

        System.out.println(taskList.toString());

        taskList.addTask("сходить на урок Java Basic");
        taskList.addTask("убраться дома");
        taskList.addTask("Выполнить домашку аит");


        System.out.println(taskList.toString());

    }
}

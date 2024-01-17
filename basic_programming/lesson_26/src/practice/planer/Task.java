package practice.planer;

import java.util.Objects;

public class Task {
    private String description;
    private boolean isDone;

    public Task(String description) {
        this.description = description;
        this.isDone = false;
    }

    public Task(String description, boolean isDone) {
        this.description = description;
        this.isDone = isDone;
    }

    public void changeTaskStatus() {
        isDone = !isDone;
    }

    public void changeDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        if (isDone) {
            return "Задача: " + description + " выполнена";
        } else {
            return "Задача: " + description + " выполнена";
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task task)) return false;

        if (isDone != task.isDone) return false;
        return Objects.equals(description, task.description);
    }
}

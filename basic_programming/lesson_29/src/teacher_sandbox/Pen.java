package teacher_sandbox;

// класс, характеризующий ручку, для практики методов equals и hashCode
public class Pen {
    // тип ручки - вложенный энам, может быть шариковой или перьевой
    private TypeOfDrawing typeOfDrawing;
    // цвет чернил ручки
    private String inkColor;
    // характеристика ручки - может писать или нет
    private boolean canDraw;

    public Pen(TypeOfDrawing typeOfDrawing, String inkColor, boolean canDraw) {
        this.typeOfDrawing = typeOfDrawing;
        this.inkColor = inkColor;
        this.canDraw = canDraw;
    }

    private void draw(){
        if (canDraw) {
            System.out.println(this.toString() + " drawing");
        } else {
            throw new RuntimeException("Pen cant draw!");
        }
    }

    public TypeOfDrawing getTypeOfDrawing() {
        return typeOfDrawing;
    }

    public String getInkColor() {
        return inkColor;
    }

    public void setInkColor(String inkColor) {
        this.inkColor = inkColor;
    }

    public boolean isCanDraw() {
        return canDraw;
    }

    public void setCanDraw(boolean canDraw) {
        this.canDraw = canDraw;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (!(o instanceof Pen) || o == null) {
            return false;
        }

        Pen pen = (Pen) o;

        if (this.canDraw != pen.canDraw) return false;
        if (this.typeOfDrawing != pen.typeOfDrawing) return false;
        return this.inkColor.equals(pen.inkColor);
    }

    @Override
    public int hashCode() {
        int result = 0;
        int colorHashCode = inkColor.hashCode();
        int typeHashCode = typeOfDrawing.hashCode();
        int canDrawHashCode = Boolean.valueOf(canDraw).hashCode();

        result = 31 * colorHashCode + 31 * typeHashCode + 31 * canDrawHashCode;

        return result;
    }

    @Override
    public String toString() {
        return "Pen{" +
                "typeOfDrawing=" + typeOfDrawing +
                ", inkColor='" + inkColor + '\'' +
                ", canDraw=" + canDraw +
                '}';
    }


    public static void main(String[] args) {
        Pen pen1 = new Pen(TypeOfDrawing.BALLPOINT, "blue", true);
        Pen pen2 = new Pen(TypeOfDrawing.BALLPOINT, "blue", true);

        System.out.println("pen1 == pen2 = " + (pen1 == pen2));
        System.out.println("pen1.equals(pen2) = " + pen1.equals(pen2));
        System.out.println("pen1.hashCode() = " + pen1.hashCode());
        System.out.println("pen2.hashCode() = " + pen2.hashCode());

        pen1.setInkColor("black");
        System.out.println("pen1.hashCode() = " + pen1.hashCode());
        System.out.println("pen2.hashCode() = " + pen2.hashCode());

        pen1.setInkColor("blue");
        System.out.println("pen1.hashCode() = " + pen1.hashCode());
        System.out.println("pen2.hashCode() = " + pen2.hashCode());

        pen2.setCanDraw(false);
        pen1.setInkColor("blue");
        System.out.println("pen1.hashCode() = " + pen1.hashCode());
        System.out.println("pen2.hashCode() = " + pen2.hashCode());

        pen1.draw();
        pen2.draw();

    }

    private enum TypeOfDrawing {
        BALLPOINT, INK;
    }
}

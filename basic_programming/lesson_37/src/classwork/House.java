package classwork;

// данный класс создан для практики HashCode, equals на примере конструкций, которые их используют - HashSet и HashMap
// описывает жилое пространство, где:
public class House {
    private int floor; // этаж жилья
    private String address; // адрес жилья
    private double square; // площадь жилья в неких условных единицах

    // класс не предусматривает сеттеры, тк по логике все поля задаются при
    public House(int floor, String address, double square) {
        this.floor = floor;
        this.address = address;
        this.square = square;
    }

    // класс не предусматривает сеттеры, тк по логике все поля задаются при создании в конструкторе и не меняются
    public int getFloor() {
        return floor;
    }

    public String getAddress() {
        return address;
    }

    public double getSquare() {
        return square;
    }

    @Override
    public String toString() {
        return "House{" + "floor=" + floor + ", address='" + address + '\'' + ", square=" + square + '}';
    }


    //хорошо и полностью определенный метод equals сравнивает по значениям всех полей в объекте
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof House)) return false;

        House house = (House) o;

        if (getFloor() != house.getFloor()) return false;
        if (Double.compare(house.getSquare(), getSquare()) != 0) return false;
        return getAddress().equals(house.getAddress());
    }

    //хорошо и полностью определенный метод hashCode должен вернуть число с наибольшим распределением по значениям
    @Override
    public int hashCode() {
        int result;
        long temp;
        result = getFloor();
        String address = getAddress();
        int addressHashCode = address.hashCode();

        result = 31 * result + addressHashCode;

        temp = Double.doubleToLongBits(getSquare());
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}

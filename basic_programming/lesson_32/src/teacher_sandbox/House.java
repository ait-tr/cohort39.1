package teacher_sandbox;

import java.util.ArrayList;

public class House {
    private double area;
    private String address;

    public House(double area, String address) {
        this.area = area;
        this.address = address;
    }

    @Override
    public String toString() {
        return "House{" +
                "area=" + area +
                ", address='" + address + '\'' +
                '}';
    }

    public static void main(String[] args) {
        House house1 = new House(100, "aaa");
        House house2 = new House(150, "bbb");
        House house3 = new House(80, "abc");
        House house4 = new House(36, "ccc");

        ArrayList<House> houses = new ArrayList<>();

        houses.add(house1);
        houses.add(house4);
        houses.add(house2);
        houses.add(house3);

        for (House house : houses) {
            System.out.println(house);
        }
    }
}

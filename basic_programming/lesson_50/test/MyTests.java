import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.EnumSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

class MyTests {

    @ParameterizedTest
    @ValueSource(strings = {"Hello", "JUnit", "Parameterized Test"})
    void withValueSource(String word) {
        assertTrue(word.length() > 0);
    }

    @ParameterizedTest
    @MethodSource("numberProvider")
    void withMethodSource(int number) {
        assertTrue(number > 0);
    }

    static Stream<Integer> numberProvider() {
        return Stream.of(1, 2, 3, 4, 5);
    }

    @ParameterizedTest
    @EnumSource(Day.class)
    void withEnumSource(Day day) {
        assertFalse(day.toString().isEmpty());
    }

    enum Day {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
    }
}

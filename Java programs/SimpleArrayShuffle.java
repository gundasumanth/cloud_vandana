import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class SimpleArrayShuffle {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

        // Convert the array to a list for shuffling
        List<Integer> list = Arrays.asList(array);

        // Shuffle the list
        Collections.shuffle(list);

        // Convert the shuffled list back to an array
        list.toArray(array);

        System.out.println("Shuffled array: " + Arrays.toString(array));
    }
}

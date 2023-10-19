import java.util.HashMap;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "IX"; // Replace this with your Roman numeral input

        int result = romanToInt(romanNumeral);
        System.out.println("Roman numeral " + romanNumeral + " is equivalent to " + result);
    }

    public static int romanToInt(String s) {
        // Create a map to store Roman numeral values
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentVal = romanValues.get(s.charAt(i));

            // Check for subtraction rule
            if (i < s.length() - 1 && currentVal < romanValues.get(s.charAt(i + 1))) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }

        return result;
    }
}

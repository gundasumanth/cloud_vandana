import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog"; // Replace this with your input sentence

        boolean isPangram = isPangram(sentence);

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        // Create a HashSet to store encountered letters
        HashSet<Character> letterSet = new HashSet<>();

        // Remove spaces and convert the sentence to lowercase
        sentence = sentence.replaceAll(" ", "").toLowerCase();

        // Iterate through the sentence
        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }

        // Check if the HashSet contains all 26 letters
        return letterSet.size() == 26;
    }
}

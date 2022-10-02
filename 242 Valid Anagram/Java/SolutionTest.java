import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SolutionTest {
    @Test
    public void testExample1() {
        String s = "anagram";
        String t = "nagaram";

        Solution solution = new Solution();
        assertEquals(true, solution.isAnagram(s, t));
    }

    @Test
    public void testExample2() {
        String s = "rat";
        String t = "car";

        Solution solution = new Solution();
        assertEquals(false, solution.isAnagram(s, t));
    }

    @Test
    public void testMinLengthStringsTrue() {
        String s = "a";
        String t = "a";

        Solution solution = new Solution();
        assertEquals(true, solution.isAnagram(s, t));
    }

    @Test
    public void testMinLengthStringsFalse() {
        String s = "a";
        String t = "b";

        Solution solution = new Solution();
        assertEquals(false, solution.isAnagram(s, t));
    }

    @Test
    public void testMaxLengthStringsSingleCharacterTrue() {
        String s = "";
        String t = "";
        for (int i = 0; i < (5 * (Math.pow(10, 4))); i++) {
            s += "a";
            t += "a";
        }

        Solution solution = new Solution();
        assertEquals(true, solution.isAnagram(s, t));
    }
}

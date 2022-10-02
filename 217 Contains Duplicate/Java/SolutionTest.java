import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SolutionTest {
    @Test
    public void testExampleCases() {
        int[] example1 = { 1,2,3,1 };
        int[] example2 = { 1,2,3,4 };
        int[] example3 = {1,1,1,3,3,4,3,2,4,2};

        assertEquals(true, Solution.containsDuplicate(example1));
        assertEquals(false, Solution.containsDuplicate(example2));
        assertEquals(true, Solution.containsDuplicate(example3));
    }

    @Test
    public void testMaxLengthNums() {
        int[] nums = new int[100000];
        for (int i = 1; i < nums.length + 1; i++) {
            nums[i - 1] = i;
        }

        assertEquals(false, Solution.containsDuplicate(nums));
    }

    @Test
    public void testMinLengthNums() {
        int[] nums = { 1 };

        assertEquals(false, Solution.containsDuplicate(nums));
    }
}

import java.util.HashMap;

public class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();

        for (char c : s.toCharArray()) {
            if (map.get(c) == null)
                map.put(c, 1);
            else
                map.compute(c, (k, v) -> v++);
        }

        for (char c : t.toCharArray()) {
            if (map.get(c) == null || map.get(c) == 0)
                return false;
            else
                map.compute(c, (k, v) -> v--);
        }
        
        return true;
    }
}
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class EnoughIsEnough {
	public static int[] deleteNth(int[] elements, int maxOccurrences) {
		if (maxOccurrences == 0) {
			return new int[]{};
		}
		final Map<Integer, Integer> hash = new HashMap<>();
		return Arrays.stream(elements).filter(k -> hash.merge(k, 1, Integer::sum) <= maxOccurrences
		).toArray();
	}
}

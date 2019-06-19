import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class Kata{
   public static String expandedForm(int num) {
		List<String> list = new ArrayList<>();
		String n = ("" + num);
		final int bound = n.length() - 1;
		AtomicInteger index = new AtomicInteger();
		Arrays.stream(n.split("")).forEach(s -> {
			if (!s.equals("0")) {
				list.add(s + "0".repeat(bound - index.get()));
			}
			index.getAndIncrement();
		});
		return String.join(" + ", list);
	}
}
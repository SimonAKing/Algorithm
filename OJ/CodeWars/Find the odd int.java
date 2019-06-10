package com.tomotoes.probleam;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeSet;

import static java.util.Arrays.stream;

public class FindOdd {
	public static int findIt(int[] a) {
		return stream(a).reduce(0, (x, y) -> x ^ y);
	}

	public static int findIt2(int[] a) {
		Map<Integer, Integer> count = new HashMap<>();
		stream(a).forEach(v -> {
			if (!count.containsKey(v)) {
				count.put(v, 1);
			} else {
				count.put(v, count.get(v) + 1);
			}
		});
		for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
			if (entry.getValue() % 2 != 0) {
				return entry.getKey();
			}
		}
		return 0;
	}

	public static int findIt3(int[] a) {
		final TreeSet<Integer> set = new TreeSet<>();
		stream(a).forEach(v -> {
			if (set.contains(v)) {
				set.remove(v);
			} else {
				set.add(v);
			}
		});
		return set.first();
	}

	public static void main(String[] args) {
		System.out.println(findIt2(new int[]{1, 2, 4, 2, 1, 2, 5, 3}));
	}
}

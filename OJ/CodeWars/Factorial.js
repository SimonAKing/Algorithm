function factorial(n) {
	return Array.from({ length: Math.max(n, 1) }).reduce(
		(r, _, n) => r * (n + 1),
		1
	);
}

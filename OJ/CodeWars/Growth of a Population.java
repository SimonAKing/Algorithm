package com.tomotoes.probleam;

class Arge {

	public static int nbYear(int p0, double percent, int aug, int p) {
		percent /= 100;
		int i = 1;
		p0 += p0 * percent + aug;
		while (p0 < p) {
			p0 += p0 * percent + aug;
			i++;
		}
		return i;
	}

}

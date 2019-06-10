from functools import reduce


def find_it(seq):
	return [
	    k for k, v in {
	        v: (lambda val, seq: reduce(lambda r, v: r + (v == val), seq, 0)
	            )(v, seq)
	        for v in seq
	    }.items() if v % 2 != 0
	][0]
"""
def find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i
"""

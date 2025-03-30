from collections import defaultdict

def subsequence_sums(arr, s):
    sums_count = defaultdict(int)
    sums = 0
    count = 0
    for i in arr:
        sums += i
        if sums == s:
            count += 1
        if sums - s in sums_count:
            count += sums_count[sums - s]
        sums_count[sums] += 1
    return count

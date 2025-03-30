def sort_by_length(arr: list[str]):
    arr.sort(key=lambda a: len(a))
    return arr


print(sort_by_length(["i", "to", "beg", "life"]))

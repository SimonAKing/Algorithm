const solution = () => Array.from({ length: 100 }, (_, i, a = !((i + 1) % 3), b = !((i + 1) % 5)) => a && b ? 'FuzzBuzz' : a ? 'Fuzz' : b ? 'Buzz' : (i + 1)).forEach(i => console.log(i))

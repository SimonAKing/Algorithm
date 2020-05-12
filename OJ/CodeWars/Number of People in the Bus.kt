fun people(busStops: Array<Pair<Int, Int>>): Int = busStops.sumBy { it.first } - busStops.sumBy { it.second }

// fun people(busStops: Array<Pair<Int, Int>>) = busStops.sumBy { it.first - it.second }

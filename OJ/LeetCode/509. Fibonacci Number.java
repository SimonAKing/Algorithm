class Solution {
  
  private static Map<Integer,Integer> cache = new HashMap<>();
	
  static {
    cache.put(0,0);
    cache.put(1,1);
  }
  
  public int fib(int N) {
	  if(cache.containsKey(N)){
      return cache.get(N);
    }
		final int result = fib(N-1) + fib(N-2);
	  cache.put(N,result);
    return result;
  }
}


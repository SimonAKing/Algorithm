class Solution {
	public int fib(int N) {
		if(N < 0){
			throw new Error("arg is a negative number");
		}
		if(N<=1){
			return N;
		}
		return fib(N-1)+fib(N-2);
	}
}

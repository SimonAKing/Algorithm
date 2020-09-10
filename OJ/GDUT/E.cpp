#include <iostream>

using namespace std;

int cal(int n)
{
	int ans = 0;
	while(n)
	{
		ans ++;
		n &= n-1;
	}
	return ans;
}

int lowbit(int n)
{
	return n&-n;
}

int main()
{
	int T;
	scanf("%d",&T);
	while(T--)
	{
		int n, k;
		scanf("%d%d", &n, &k);
		int ans = 0;
		while(cal(n) > k)
		{
			ans += lowbit(n);
			n += lowbit(n);
		}
		printf("%d\n", ans);
	}
	return 0;
}

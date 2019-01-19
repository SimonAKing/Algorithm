#include <stdio.h>
int gcd(int a,int b)
{
return b?gcd(b,a%b):a;	
}
int main()
{
	int n;
	scanf("%d",&n);
	while(n--)
	{
		int a,b,i;
		scanf("%d%d",&a,&b);
		for(i=2*b;gcd(i,a)!=b;i+=b);
		printf("%d\n",i);
	}
	return 0;
}

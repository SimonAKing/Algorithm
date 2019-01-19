#include "stdio.h"
long factorial(int m)
{
	int i;
	long lFac=1;
	for(i=1;i<=m;i++)
	{
		lFac*=i;
	}
	return lFac;
} 
long factoriaSum(int n)
{
	long sum=0;
	int i;
	for(i=1;i<=n;i++)
	{
		sum+=factorial(i);
	}
	return sum;
}
int main()
{
	int n;
	scanf("%d",&n); 
	long t;
	t=factoriaSum(n);
    printf("%ld\n",t);
	return 0;
}

#include <stdio.h>
long long gcd(long long a,long long b)
{ 
  return b?gcd(b,a%b):a; 
}
int main()
{
	long long s[100],n,max,o,i;
	while(scanf("%lld",&n)!=EOF&&n)
	{
		max=o=1;
		for(i=0;i<n;i++)
		{
			scanf("%I64d",&s[i]);
			if(s[i]>=1000000)
			   o=0;
		}
		max=s[0];
		for(i=1;i<n;i++)
		{
		   max=max*s[i]/gcd(max,s[i]);
		   if(max>=1000000)
		   {
		   	o=0;
		   	break;
		   }
	    }
		if(o)
		  printf("The CEO must bring %I64d pounds.\n",max);
		else
		  printf("Too much money to pay!\n");
	}
	return 0;
}

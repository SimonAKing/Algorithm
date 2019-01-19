#include "stdio.h"
int s[17];
int main(void)
{
	long i,j,k,l,z,x,o=0;
	for(i=0;i<200000;i++)
	{
	    for(j=i,k=1;(j/=10)>0;k*=10); 
		z=k*10;
		j=0;
		x=10;
		while(k>0)
		{
			j=(j+(i%(k*10))*(i%x-i%(x/10)))%z;
			k/=10;
			x*=10;
		}
		if(i==j)
		{
			s[o++]=i;
		}
	}
	for(i=0;i<o;i++)
	{
		if(i!=o-1)
		  printf("%d ",s[i]);
		else
		  printf("%d\n",s[i]);
	}
	return 0;
}
-------------------------------------------------------------------
#include<stdio.h>
int main()
{
long mul,number,k,ll,kk;
for(number = 0; number < 200000; number++)
{
for( mul = number, k = 1;(mul /= 10) > 0; k *= 10);
/*由number的位数确定截取数字进行乘法时的系数k*/
kk = k * 10; /*kk为截取部分积时的系数*/
mul = 0; /*积的最后n位*/
ll = 10; /*ll为截取乘数相应位时的系数*/
while (k>0)
{
mul=(mul+(number%(k*10))*(number%ll-number%(ll/10)))%kk;
/*(部分积+截取被乘数的后N位*截取乘数的第M位)，%kk再截取部分积*/
k /= 10; /*k为截取被乘数时的系数*/
ll *= 10;
}

if (number == mul) /*判断若为自守数则输出*/
{

printf("%ld ",number);
}
}
}

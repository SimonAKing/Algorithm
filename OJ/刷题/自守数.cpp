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
/*��number��λ��ȷ����ȡ���ֽ��г˷�ʱ��ϵ��k*/
kk = k * 10; /*kkΪ��ȡ���ֻ�ʱ��ϵ��*/
mul = 0; /*�������nλ*/
ll = 10; /*llΪ��ȡ������Ӧλʱ��ϵ��*/
while (k>0)
{
mul=(mul+(number%(k*10))*(number%ll-number%(ll/10)))%kk;
/*(���ֻ�+��ȡ�������ĺ�Nλ*��ȡ�����ĵ�Mλ)��%kk�ٽ�ȡ���ֻ�*/
k /= 10; /*kΪ��ȡ������ʱ��ϵ��*/
ll *= 10;
}

if (number == mul) /*�ж���Ϊ�����������*/
{

printf("%ld ",number);
}
}
}

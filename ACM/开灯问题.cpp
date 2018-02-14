#include <stdio.h>
#include <string.h>
#define maxn 1010
int a[maxn];
int main()
{
	int n,k,first=1;
	memset(a,0,sizeof(a));
	scanf("%d%d",&n,&k);
	for(int i=1;i<=k;i++)
		 for(int j=1;j<=n;j++)
		 	if(j%i==0)a[j]=!a[j];//j%1==0 第一次内部循环，数组全变为 1 全部开灯
			                     //j%2==0 第二次内部循环，2的倍数的下标值的元素为 0 ，闭灯
								 //j%3==0 第三次内部循环，3的倍数的下标值的元素为 0 ，闭灯
								  //                       但是，3与2的公倍数 为1,    开灯 	 
	for(int i=1;i<=n;i++)
       if(a[i])//1 is right !
		{
		 if(first)first=0;
		 else printf(" ");
		 printf("%d",i);
		}
	printf("\n");
	return 0;
} 

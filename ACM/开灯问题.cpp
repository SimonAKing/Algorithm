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
		 	if(j%i==0)a[j]=!a[j];//j%1==0 ��һ���ڲ�ѭ��������ȫ��Ϊ 1 ȫ������
			                     //j%2==0 �ڶ����ڲ�ѭ����2�ı������±�ֵ��Ԫ��Ϊ 0 ���յ�
								 //j%3==0 �������ڲ�ѭ����3�ı������±�ֵ��Ԫ��Ϊ 0 ���յ�
								  //                       ���ǣ�3��2�Ĺ����� Ϊ1,    ���� 	 
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

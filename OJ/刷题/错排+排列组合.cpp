#include <stdio.h>
int main(void)
{
	int n,m,c,i;
    scanf("%d",&c);
	while(c--)
	{
		long long a[31],sum1,sum2;
		a[0]=a[1]=0;a[2]=1,a[3]=2;
		for(i=4;i<30;i++)
			a[i]=(i-1)*(a[i-1]+a[i-2]);//���Ź�ʽ 
		sum1=sum2=1;
		scanf("%d%d",&n,&m);
		for(i=n;i>n-m;i--)//�Ե� ����������� 
			sum1*=i;
		for(i=2;i<=m;i++)//��� ����������� 
			sum2*=i;
		printf("%lld\n",sum1/sum2*a[m]);//�Ե� / ��� * ����	
	}
	return 0;
}



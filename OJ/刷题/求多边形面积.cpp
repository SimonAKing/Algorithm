#include<stdio.h>
int main(void)
{
	int n;
	int a[100],b[100],i,j,k;
	double s;
	while(scanf("%d",&n)!=EOF&&n)
	{
		s=0;
		i=0;
		for(i=0;i<n;i++)
			scanf("%d%d",&a[i],&b[i]);
		a[n]=a[0];
		b[n]=b[0];
		for(i=0;i<n;i++)
			s+=(a[i]*b[i+1]-a[i+1]*b[i]);
		printf("%.1lf\n",s/2);
	}
	return 0;
}


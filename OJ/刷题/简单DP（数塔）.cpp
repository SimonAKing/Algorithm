#include <stdio.h>
#define max(a,b) a>b?a:b;
int main()
{
	int n;
	scanf("%d",&n);
	int High;
	int i,j;
	int Ta[500][500]={0};
	while(n--)
	{
		scanf("%d",&High);
		for(i=1;i<=High;i++)
			for(j=1;j<=i;j++)
				scanf("%d",&Ta[i][j]);
	    for(i=High-1;i>=1;i--)
	        for(j=1;j<=i;j++)
	            Ta[i][j]+=max(Ta[i+1][j],Ta[i+1][j+1]);
	    printf("%d\n",Ta[1][1]);
	}
	return 0;
} 

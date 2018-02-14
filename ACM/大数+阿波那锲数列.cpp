#include <stdio.h>
int main()
{
    int s[205][205]={0};
	s[1][1]=1;
	s[2][1]=2;
	for(int i=3;i<=200;i++)
	{
		for(int j=1;j<=200;j++)
		{
			s[i][j]+=s[i-1][j]+s[i-2][j];
			if(s[i][j]>9)
			{
				s[i][j+1]=s[i][j]/10;
				s[i][j]%=10;
			}
		}
	}
	int n;
	while(~scanf("%d",&n))
	{
		int j=200;
		while(s[n][j]==0)
		   j--;
		for(;j>=1;j--)
			printf("%d",s[n][j]);
		printf("\n");
	}
	return 0;
}

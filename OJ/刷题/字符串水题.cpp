#include "stdio.h"
#include "string.h"
int main()
{
	int a[26],t,min,i,j,k,x,num[26],nun[26];
	char c[10005],s[100];
	while(~scanf("%d",&t))
	{
		while(t--)
		{
			min=10000;
			memset(nun,0,sizeof(nun));
			memset(num,0,sizeof(num));
			scanf("%s%s",c,s);
			int lenc=strlen(c);
			int lens=strlen(s);
			for(j=0;j<lenc;j++)
			{
				x=c[j]-'a';
				num[x]++;
			}
			for(j=0;j<lens;j++)
			{
				x=s[j]-'a';
				nun[x]++;
			}
			for(x=0;x<26;x++)
			{
				if(nun[x]!=0)
				{
					a[x]=num[x]/nun[x];
					if(a[x]<min)
					{
						min=a[x];
					}
				}
			}
			printf("%d\n",min);
		}
	}
	return 0;
}

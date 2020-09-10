#include "stdio.h"
int main(void)
{
	int n,m,i,t,s[200];
	while(~scanf("%d%d",&n,&m))
	{
		if(n==0&&m==0)
		  break;
		else
		  for(i=0;i<n;i++)
		  {
		  	scanf("%d",&s[i]);
		  	if(m<s[i])
		  	{
		  		t=m;
		  		m=s[i];
		  		s[i]=t;
			}
			printf("%d ",s[i]);
		  }
		  printf("%d\n",m);
	}
	return 0;
}

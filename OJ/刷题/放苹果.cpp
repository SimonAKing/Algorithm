#include <stdio.h>
int s(int x,int y);
int main()
{
	int t,m,n,i;
	while(~scanf("%d",&t))
	{
		for(i=0;i<t;i++)
		{
			scanf("%d %d",&m,&n);
			printf("%d\n",s(m,n));
		}
		return 0;
	}
}
int s(int x,int y)
{
	if(x==0||y==1)
	return 1;
	if(y>x)
 	return s(x,x);
  	else
   	return s(x,y-1)+s(x-y,y);	
}


#include <stdio.h>
#include <algorithm>
#define N 2016
using namespace std;
struct Mj
{
	int a;
	int b;
}stu[N];
bool cmp(Mj x,Mj y)
{
	if(x.b!=y.b)
	  return x.b<y.b;
    else
      return x.a<y.a;
}
bool ps(int n)
{
	int i;
	for(i=3;i*i<=n;i+=2)
	{
		if(n%i==0) 
  		   return 0;
	}
	return 1;
}
int main()
{
	int i,j,r,l;
	for(i=6,r=0;i<=2012;i+=2,r++)
	{
		for(j=3;j<=i/2;j+=2)
		{
			if(ps(i-j)&&ps(j))
			{
				stu[r].a=i;
				stu[r].b=i-j-j;
				break;
			}
		}
	}
	sort(stu,stu+1004,cmp);
	for(l=0;l<r;l++)
	{
		printf("%d %d\n",stu[l].a,stu[l].b);
	}
	return 0;
}

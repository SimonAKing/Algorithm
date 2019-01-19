#include <stdio.h>
#include <string.h>
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <time.h>
#include <set>
#include <map>
#include <string>
#include <math.h>
#include <stdlib.h>
using namespace std;
long long dp[20][20][10][2][2][2];
int num[20];
int s[20];
long long rec(int i,int pre,int up,int down,int flag,int q,int len,int ispa)
{
	if(i<0)return up&&down&&ispa;
	if(~dp[i][len][pre][up][down][ispa]&&!flag&&!q)return dp[i][len][pre][up][down][ispa];
	long long res=0;
	int o=s[i];
	for(int j=0;j<10;j++)
	{
	    num[i]=j;
		if(j>o&&flag)break;
		if(q)res+=rec(i-1,j,0,0,j<o?0:flag,q&&j==0,len-(q&&j==0),ispa);
		else if(j==pre)
		{
		    if(ispa&&i<len/2)
		    res+=rec(i-1,j,up,down,j<o?0:flag,q&&j==0,len,j==num[len-i-1]);
		    else res+=rec(i-1,j,up,down,j<o?0:flag,q&&j==0,len,ispa);
		}
		else if(j>pre)
        {
            if(!down)continue;
            if(ispa&&i<len/2)
            res+=rec(i-1,j,1,down,j<o?0:flag,q&&j==0,len,j==num[len-i-1]);
            else res+=rec(i-1,j,1,down,j<o?0:flag,q&&j==0,len,ispa);
        }
        else if(j<pre)
        {
            if(up)continue;
            if(ispa&&i<len/2)
            res+=rec(i-1,j,up,1,j<o?0:flag,q&&j==0,len,j==num[len-i-1]);
            else res+=rec(i-1,j,up,1,j<o?0:flag,q&&j==0,len,ispa);
        }
	}
	if(!flag&&!q)dp[i][len][pre][up][down][ispa]=res;
	return res;
}
long long cal(long long x)
{
	int len=0;
	while(x)
	{
		s[len++]=x%10;
		x/=10;
	}
	return rec(len-1,0,0,0,1,1,len,1);
}
int main()
{
	memset(dp,-1,sizeof(dp));
	long long l,r;
	int t;
	scanf("%d",&t);
	while(t--){
	scanf("%lld%lld",&l,&r);
	printf("%lld\n",cal(r)-cal(l-1));
	}
    return 0;
}

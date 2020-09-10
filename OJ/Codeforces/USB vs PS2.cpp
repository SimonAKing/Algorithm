#include <stdio.h>
#include <algorithm>
using namespace std;
#define maxn 1500001
long long U[maxn]={0};
long long P[maxn]={0};
long long R[maxn]={0};
int main(){
	char s[10];
	long long a,b,c,m,i,val,u,p,r;
	long long sum=0,num,x;
	scanf("%lld %lld %lld%lld",&a,&b,&c,&m);
	for(r=0,u=0,p=0,i=0;i<m;i++){
		scanf("%lld %s",&val,s);
		if(s[0]=='U')
		    U[u++]=val;
        else
            P[p++]=val;
	}
	sort(U,U+u);sort(P,P+p);
	num=a>u?u:a;
	for(i=0;i<num&&U[i]!=0;i++)
		sum+=U[i];
	while(U[i]!=0)
	    R[r++]=U[i++];
    x=b>p?p:b;
    num+=x;
    for(i=0;i<x&&P[i]!=0;i++)
    	sum+=P[i];
   	while(P[i]!=0)
   	    R[r++]=P[i++];
    x=(m-num)>c?c:(m-num);
    num+=x;
    sort(R,R+r);
	for(i=0;i<x&&R[i]!=0;i++)
		sum+=R[i];
	printf("%lld %lld\n",num,sum);
	return 0;
}

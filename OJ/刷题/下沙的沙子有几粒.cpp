#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,m,i,j;
    long long s[22][22]={0};
    for(i=1;i<21;++i)
        s[i][1]=i;
    for(i=2;i<21;++i)
        for(j=2;j<=i;++j)
            s[i][j]=s[i-1][j]+s[i][j-1];   
    while(~scanf("%d %d",&n,&m))
        printf("%lld\n",s[n][m]);
    return 0;
} 

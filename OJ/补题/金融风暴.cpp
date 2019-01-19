#include<bits/stdc++.h>
using namespace std;
const int maxn=255555;
int A[5010];
int Dp[maxn];
int main(){
    int n,v,c,u,sum;
    while(~scanf("%d",&n) , n>0){
        memset(A,0,sizeof(A));
        memset(Dp,0,sizeof(Dp));
        sum=u=0;
        for(int i=0;i<n;++i){
            scanf("%d %d",&v,&c);
            for(int j=0;j<c;++j,++u){
                A[u]=v;
                sum+=A[u];
            }
        }
        for(int i=0;i<u;++i){
            for(int j=sum/2;j>=A[i];--j){
                Dp[j]=max(Dp[j],Dp[j-A[i]]+A[i]);
            }
        } 
        printf("%d %d\n",sum-Dp[sum/2],Dp[sum/2]); 
    }
    return 0;
}

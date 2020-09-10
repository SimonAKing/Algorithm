#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 1050;
ll Val[maxn];
int Dp[maxn];
ll Gcd(ll x,ll y){
    return y?Gcd(y,x%y):x;
}
int main(){
    int T,N;
    scanf("%d",&T);
    while(T--){
        scanf("%d",&N);
        memset(Val,0,sizeof(Val));
        fill(Dp,Dp+N,1);
        for(int i=0;i<N;scanf("%lld",&Val[i++]));

        for(int i=1;i<N;++i){
            for(int j=0;j<i;++j){
                if(Gcd(Val[i],Val[j])==1){
                    Dp[i]=max(Dp[i],Dp[j]+1);
                }
            }
        }
        printf("%d\n",*max_element(Dp,Dp+N));

    }
    return 0;
}

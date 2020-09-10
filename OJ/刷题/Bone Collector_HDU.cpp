#include<bits/stdc++.h>
using namespace std;
const int maxn=1010;
int Value[maxn];
int Space[maxn];
int Dp[maxn];
int main(){
    int T,n,m;
    cin>>T;
    while(T--){
        cin>>n>>m;
        memset(Value,0,sizeof(Value));
        memset(Space,0,sizeof(Space));
        memset(Dp,0,sizeof(Dp));
        for(int i=0;i<n;++i)
            scanf("%d",Value+i);
        for(int i=0;i<n;++i)
            scanf("%d",Space+i);
        for(int i=0;i<n;++i){
            for(int j=m;j>=Space[i];--j){
                Dp[j]=max(Dp[j],Dp[j-Space[i]]+Value[i]);
            }
        }
        printf("%d\n",Dp[m]);
    }
    return 0;
} 

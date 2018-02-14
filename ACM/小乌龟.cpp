#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e3+5;
struct MyData{
	int Pos,Val;
}Ac[maxn];
int Dp[maxn];
int main(){
	int T,M,N,TPos,TVal;
	while(~scanf("%d",&T)){
		while(T--){
			int R=0;
			memset(Dp,0,sizeof(Dp));
			memset(Ac,0,sizeof(Ac));
			scanf("%d%d",&M,&N);
			while(N--){
				scanf("%d%d",&TPos,&TVal);
				TPos*=2;
				if(TPos<=M){
					Ac[R++]=MyData{TPos,TVal};
				}
			}
			for(int i=0;i<R;++i){
				for(int j=M;j>=Ac[i].Pos;j--){
					Dp[j]=max(Dp[j],Dp[j-Ac[i].Pos]+Ac[i].Val);
				}
			}
			printf("%d\n",Dp[M]);
		}
	}
	return 0;
} 

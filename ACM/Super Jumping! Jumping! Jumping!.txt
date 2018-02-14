#include<bits/stdc++.h>
using namespace std;
int Val[1005];
int Dp[1005];
int main(){
	int N,Ans;
	while(~scanf("%d",&N) && N){
		Ans=0;
		for(int i=0;i<N;++i){
			scanf("%d",&Val[i]);
			Dp[i]=Val[i];
		}
		int Temp;
		for(int i=1;i<N;++i){
			Temp=0;
			for(int j=0;j<i;++j){
				if(Val[i]>Val[j]){
					Temp=max(Temp,max(Dp[j],Val[j]));
				}
			}
			Dp[i]+=Temp;
			Ans=max(Dp[i],Ans);
		}
		printf("%d\n",Ans);
	}
	
	return 0;
}
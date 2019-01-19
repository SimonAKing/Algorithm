/*
暴力  
1
1 2
1 2 3
1 2 ... N

2
2 3
2 3 4
2 3 ... N

3
...
....

...


N
找出 变化中的最大子序列和 
*/
#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e2+5;
int Val[maxn][maxn];
int Sum[maxn],N;
inline int GetMax(){
	int Max,Ans;
	Max=Ans=Sum[0];
	for(int i=1;i<N;++i){
		(Ans>0)?Ans+=Sum[i]:Ans=Sum[i];
		Max=max(Max,Ans);
	}
	return Max;
}
int main(){
	while(~scanf("%d",&N)){
		int Ans=-200;
		for(int i=0;i<N;++i){
			for(int j=0;j<N;scanf("%d",&Val[i][j++]));
		}
		for(int i=0;i<N;++i){
			fill(Sum,Sum+maxn,0);
			
			for(int j=i;j<N;++j){
				for(int k=0;k<N;++k){
					Sum[k]+=Val[j][k];
				}
				Ans=max(Ans,GetMax());
			}
		}
		printf("%d\n",Ans);
	}
	return 0;
}


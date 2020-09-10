#include<bits/stdc++.h>
using namespace std;
int main(){
	int T,N,Val,Sum;
	int L,R,Max,P,C=0;
	scanf("%d",&T);
	while(T--){
		Sum=0;P=L=R=1;
		Max=INT_MIN;
		scanf("%d",&N);
		for(int i=1;i<=N;++i){
			scanf("%d",&Val);
			Sum+=Val;
			if(Sum>Max){Max=Sum;R=i;L=P;}
			if(Sum<0){Sum=0;P=i+1;}
		}
		printf("Case %d:\n%d %d %d\n",++C,Max,L,R);  
		if(T){printf("\n");}
	}
	return 0;
}
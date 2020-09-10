#include<bits/stdc++.h>
using namespace std;
map<int,int>Ac;
int main(){
	int T,Val,Q;
	int Max=0,k=0;
	scanf("%d",&T);
	while(T--){
		scanf("%d",&Q);
		while(Q--){
			scanf("%d",&Val);
			Ac[Val]++;
			if(Ac[Val]>Max){
                Max=Ac[Val];
                k=Val;
			}
			if(Ac[Val]==Max && k<Val){
                k=Val;
			}
		}
	}
	printf("%d %d\n",k,Max);
	return 0;
}

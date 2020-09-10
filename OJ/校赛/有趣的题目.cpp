#include<bits/stdc++.h>
using namespace std;
int main(){
	int T,Ac,N;
	while(~scanf("%d",&T)){
		while(T--){
			int Ans=0;
			scanf("%lld",&N);
			int M=N;
			while(N){
				Ac=N%16;
				if(Ac==0||Ac==4||Ac==6||Ac==9||Ac==10||Ac==13){
					Ans++;
				}
				if(Ac==8||Ac==11){
					Ans+=2;
				}
				N/=16;
			}
			if(M==0){Ans=1;}
			printf("%d\n",Ans);
		}
	}
	return 0;
}

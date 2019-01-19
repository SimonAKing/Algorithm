#include<bits/stdc++.h>
using namespace std;
struct Time{int H,M;};
int Ac(int A,int B){return A*60+B;}
int main(){
	//freopen("D://In.txt","r",stdin);
	Time S,E,A;
	int T,N,M,K,Start,End;
	int Sum,TS,TE,Ans;
	while(~scanf("%d",&T)){
		while(T--){
			scanf("%d %d:%d %d:%d %d:%d %d %d",&N,&S.H,&S.M,&E.H,&E.M,&A.H,&A.M,&M,&K);
			Start=Ac(S.H,S.M);End=Ac(E.H,E.M);Sum=Ac(A.H,A.M);Ans=0;N*=K;
			while(N--){
				scanf("%d:%d %d:%d",&S.H,&S.M,&E.H,&E.M);
				TS=Ac(S.H,S.M);TE=Ac(E.H,E.M);
				if(TS>=End||TE<=Start||TE-TS<Sum||TE-Start<Sum||End-TS<Sum){Ans++;}
			}
			printf("%lld\n",Ans*M);
		}	
	}
	return 0;
} 


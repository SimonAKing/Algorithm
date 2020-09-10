#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4+5;
int Ptr[maxn*100];
int Str[maxn];
int Next[maxn];
int main(){
	int T,N,M,k,i;
	Next[0]=0;
	scanf("%d",&T);
	while(T--){
		scanf("%d%d",&N,&M);
		for(i=0;i<N;scanf("%d",&Ptr[i++]));
		for(i=0;i<M;scanf("%d",&Str[i++]));
		for(i=1;i<M;++i){
			k=Next[i-1];
			while(Str[i]!=Str[k] && k){k=Next[k-1];}
			Next[i]=Str[i]==Str[k]?k+1:0;
		}
		k=0;
		for(i=0;i<N;++i){
			while(k && Ptr[i]!=Str[k]){k=Next[k-1];}
			if(Str[k]==Ptr[i]){++k;}
			if(k==M){break;}
		}
		k==M?printf("%d\n",i-M+2):printf("%d\n",-1);
	}
	return 0;
}
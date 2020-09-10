#include<cstdio>
using namespace std;
typedef long long ll;
int N;
inline void DFS(ll Ans,int C){
	if(!N){
		return;
	}
	if(Ans%N==0){
		printf("%lld\n",Ans);
		N=0;return;
	}
	if(C==19){
		return;
	}
	DFS(Ans*10,C+1);
	DFS(Ans*10+1,C+1);
}
int main(){
	while(~scanf("%d",&N) && N){
		DFS(1,1);
	}
	return 0;
}
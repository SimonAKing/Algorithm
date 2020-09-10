#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e6+5;
struct MyData{
	int Pos,Val;
}Ac[maxn];
typedef struct MyData T;
inline bool cmp(T x,T y){
	if(x.Pos<y.Pos)
		return true;
	return false;
}
int main(){
	int T,M,N,L,R,Ans;
	while(~scanf("%d",&T)){
		while(T--){
			int c=0;
			memset(Ac,0,sizeof(Ac));
			scanf("%d%d",&N,&M);
			for(int i=0;i<M;++i){
				scanf("%d%d",&L,&R);
				Ac[c++]=MyData{L,1};
				Ac[c++]=MyData{R,-1};
			}
			Ans=L=R=0;
			sort(Ac,Ac+c,cmp);
			for(int i=0;i<c;++i){
				Ans+=Ac[i].Val;
				if(Ans>0 && (!R)){
					R=1;L=Ac[i].Pos;
				}
				if(!Ans && R){
					R=0;N-=(Ac[i].Pos-L);
				}
			}
			printf("%d\n",N);
		}
	}
	return 0;
}

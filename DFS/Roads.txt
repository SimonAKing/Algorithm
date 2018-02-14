#include<cstdio>
#include<cstring>
#include<algorithm>
#include<vector>
using namespace std;
#define INF 0x3f3f3f3f
const int maxn = 110;
struct Step{
    int End,Cost,Len;
};
int N,K,R;
int MinLen,NowLen,NowCost;
bool Visited[maxn];
int MinL[maxn][10010];
vector<Step>Ac[maxn];
inline void Init(){
	memset(MinL,INF,sizeof(MinL));
	memset(Visited,false,sizeof(Visited));
    for(int i=0;i<maxn;Ac[i++].clear());
    int Start;
    Step Val;
    scanf("%d%d%d",&K,&N,&R);
    while(R--){
        scanf("%d%d%d%d",&Start,&Val.End,&Val.Len,&Val.Cost);
        Ac[Start].push_back(Val);
    }
    MinLen=INF;
    NowLen=NowCost=0;
}
inline void DFS(int Pos){
	if(Pos==N){
		MinLen=min(MinLen,NowLen);
		return;
	}
	Step Val;
	int V=Ac[Pos].size();
	for(int i=0;i<V;++i){
		Val=Ac[Pos][i];
		if(!Visited[Val.End]){
			if(NowLen+Val.Len>=MinLen)
				continue;
			if(NowCost+Val.Cost>K)
				continue;
			if(NowLen+Val.Len>MinL[Val.End][Val.Cost+NowCost])
				continue;
			MinL[Val.End][Val.Cost+NowCost]=NowLen+Val.Len;
			NowCost+=Val.Cost;
			NowLen+=Val.Len;
			Visited[Val.End]=true;
			DFS(Val.End);
			NowCost-=Val.Cost;
			NowLen-=Val.Len;
			Visited[Val.End]=false;
		}
	}
	
}
int main(){
    Init();
	DFS(1);
	printf("%d\n",MinLen==INF?-1:MinLen);
    return 0;
}

#include<bits/stdc++.h>
using namespace std;
#define INF 0x3f3f3f3f
const int maxn = 2e4+5;
int N,M,S,T;
struct Node{
	int s,t,c;
};
int Dis[maxn];
vector<Node>edges;
vector<int>G[maxn];
typedef pair<int,int>Pair;
priority_queue<Pair,vector<Pair>,greater<Pair> >Ac;
inline void EdgeAdd(int x,int y,int z){
	edges.push_back(Node{x,y,z});
	G[x].push_back(edges.size()-1);
}
inline void Init(){
	edges.clear();
	for(int i=0;i<maxn;G[i++].clear());
	memset(Dis,INF,sizeof(Dis));
	while(!Ac.empty()){Ac.pop();}
	int x,y,z;
	scanf("%d%d%d%d",&N,&M,&S,&T);
	while(M--){
		scanf("%d%d%d",&x,&y,&z);
		EdgeAdd(x,y,z);
		EdgeAdd(y,x,z);
	}
	Ac.push(Pair(0,S));
	Dis[S]=0;
}
inline void Dijkstra(){
	Pair Now;
	int L,Q;
	while(!Ac.empty()){
		Now=Ac.top();
		Ac.pop();
		if(Now.first>Dis[Now.second]){
			continue;
		}
		L=G[Now.second].size();
		for(int i=0;i<L;++i){
			Q=G[Now.second][i];
			if(Dis[edges[Q].t]>Dis[Now.second]+edges[Q].c){
				Dis[edges[Q].t]=Dis[Now.second]+edges[Q].c;
				Ac.push(Pair(Dis[edges[Q].t],edges[Q].t));
			}
		}
	}
}
int main(){
	int C,Case=0;
	scanf("%d",&C);
	while(C--){
		Init();
		Dijkstra();
		Dis[T]==INF?printf("Case #%d: unreachable\n",++Case):printf("Case #%d: %d\n",++Case,Dis[T]);
	}
	return 0;
}
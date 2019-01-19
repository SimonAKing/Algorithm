#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4+5;
vector<int>G[maxn];
int Ac[maxn],Max;
bool Vis[maxn];
inline void DFS(int k){
	int L=G[k].size();
	for(int i=0;i<L;++i){
		if(!Vis[G[k][i]]){
			Ac[G[k][i]]++;
			Max=max(Max,Ac[G[k][i]]);
		}
	}
	for(int i=0;i<L;++i){
		if(!Vis[G[k][i]]){
			Vis[G[k][i]]=true;
			DFS(G[k][i]);
		}		
	}
}
int main(){
	int T,N;
	while(~scanf("%d",&T)){
		while(T--){
			for(int i=0;i<maxn;G[i++].clear());
			memset(Vis,false,sizeof(Vis));
			scanf("%d",&N);
			int k;Max=0;
			for(int i=1;i<=N;++i){
				scanf("%d",Ac+i);
				if(Max<Ac[i]){
					Max=Ac[i];
					k=i;
				}
			}
			int x,y;
			for(int i=1;i<N;++i){
				scanf("%d%d",&x,&y);
				G[x].push_back(y);
				G[y].push_back(x);
			}
			Vis[k]=true;DFS(k);
			printf("%d\n",Max);
		}
	}
	return 0;
}

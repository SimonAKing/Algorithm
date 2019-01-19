#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4;
int DFN[maxn];
int Low[maxn];
bool Vis[maxn];
stack<int>Ac;
vector<int>G[maxn];
int Index;
int Count;
int N;
int Belong[10000];
inline void Tarjan(int Now){
	DFN[Now]=Low[Now]=++Index;
	int L=G[Now].size(),Root;
	Ac.push(Now);
	Vis[Now]=true;
	for(int i=0;i<L;++i){
		int V=G[Now][i];
		if(!Vis[V]){
			Tarjan(V);
			Low[Now]=min(Low[V],Low[Now]);
		}
		else{
			Low[Now]=min(Low[V],DFN[Now]);
		}
	}
	if(Low[Now]==DFN[Now]){
		Count++;
		do{
			Root=Ac.top();
			Ac.pop();
			Vis[Root]=false;
			Index--;
			Belong[Root]=Count;
		}while(Root!=Now);
	}
}
inline void Solve(){
	
			Tarjan(1);
	
}
inline void Init(){
	int x,y;
	memset(Vis,false,sizeof(Vis));
	memset(DFN,false,sizeof(DFN));
	memset(Low,false,sizeof(Low));
	for(int i=0;i<maxn;G[i++].clear());
	while(!Ac.empty()){Ac.pop();}
	memset(Belong,0,sizeof(Belong));
	Count=Index=0;
	scanf("%d",&N);
	while(N--){
		scanf("%d%d",&x,&y);
		G[x].push_back(y);
	}
}
inline void OutPut(){
	printf("----\n");
	for(int i=1;i<=6;++i){
		printf("%d  %d\n",Low[i],DFN[i]);
	}
	printf("强连通块一共有：%d个\n",Count);
	for(int i=1;i<=Count;++i){
		printf("第%d个强连通块：",i);
		for(int j=1;j<10;++j){
			if(Belong[j]==i){
				printf("%d ",j);
			}
		}
		printf("\n---------\n");
	}
}
int main(){
	Init();
	Solve();
	OutPut();
	return 0;
}

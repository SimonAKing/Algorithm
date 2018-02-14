#include<bits/stdc++.h>
using namespace std;
#define INF 0x3f3f3f3f
const int maxn = 200;
int Map[maxn][maxn];
bool Vis[maxn];
int Dis[maxn];
int N,M;
void Init(){
	int x,y,a,c;
	memset(Map,INF,sizeof(Map));
	memset(Vis,false,sizeof(Vis));
	memset(Dis,0,sizeof(Dis));
	scanf("%d",&N);
	M=N*(N-1)/2;
	for(int i=0;i<M;++i){
		scanf("%d%d%d%d",&x,&y,&a,&c);
		if(c){Map[x][y]=Map[y][x]=0;}
		else{
			Map[y][x]=Map[x][y]=min(Map[x][y],a);
		}
	}
	
	for(int i=1;i<=N;++i){
		Dis[i]=Map[1][i];
	}
	Vis[1]=true;
}
int Dijkstra(){
	int Sum=0;
	for(int l=1;l<=N;++l){
		int Min=INF,k;
		for(int j=1;j<=N;++j){
			if(!Vis[j] && Dis[j]<Min){
				Min=Dis[j];
				k=j;
			}
		}
		Vis[k]=true;
		if(Min!=INF){
			Sum+=Dis[k];
			for(int i=1;i<=N;++i){
				if(!Vis[i] && Dis[i]>Map[k][i]){
					Dis[i]=Map[k][i];
				}
			}
		}
		
	}
	return Sum;
}
int main(){
	Init();
	printf("%d\n",Dijkstra());
	return 0;
}
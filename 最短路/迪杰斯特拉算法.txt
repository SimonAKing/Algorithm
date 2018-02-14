#include<bits/stdc++.h>
using namespace std;
const int INF = 0x3f3f3f3f;
int Map[200][200];
bool Vis[400];
int Dis[400];
int N,M;
void Dijkstra(){
	int Min,K;
	for(int i=1;i<=N;++i){//此循环 利用数组Dis保存 出发点能到达的所有点的距离 
		Dis[i]=Map[1][i];
	}
	Vis[1]=1;
	for(int i=0;i<N;++i){//遍历 N个点 ，每各点都要遍历一遍，可以说是 迪杰斯特拉算法的一个缺点
						 //为什么要遍历每个点？我来告诉你，这叫稳，每个点都试一下！ 
		
		Min=INF;
		for(int j=1;j<=N;++j){//找到当前没走过，距离出发点距离最短的点 
			if(Vis[j]==0 && Dis[j]<Min){
				K=j;Min=Dis[j];
			}
		}
		Vis[K]=1;//标记循环得到的点 
		
		//Dijkstra的Key 
		//每次进行以下的循环，都会更新点，优化点
		
		//更新点：根据上步循环已知->距离原点的点 并且没走过的最短距离的点A 
		//以下操作，将更新 与原点没有直接路径，但与点A 有路径的点的距离
		//此距离：该点距离等于  原点-> A点 ->该点的距离 
		
		//优化点：如果与A点相连的点B 已被更新，那么 与原点相连的 并与点B相连的 C点
		//优化： 原点-> A ->B  原点-> C -> B 的两个距离取最小值 将成为点 B的新值！ 
		for(int j=1;j<=N;++j){
			if(Vis[j]==0 && Dis[j]>Dis[K]+Map[K][j]){
				Dis[j]=Dis[K]+Map[K][j];
			}
		}
	
	}
	printf("%d\n",Dis[N]);
	return;
}
int main(){
	int a,b,t;
	while(~scanf("%d %d",&N,&M) && N,M){
		memset(Map,INF,sizeof(Map));
		memset(Dis,0,sizeof(Dis));
		memset(Vis,0,sizeof(Vis));
		for(int i=0;i<M;++i){
			scanf("%d %d %d",&a,&b,&t);
			Map[a][b]=Map[b][a]=t; 
		}
		Dijkstra();
	}
	return 0;	
}

/*
6 9
1 2 6
1 3 3
2 3 2
2 4 5
3 4 3
4 5 2
3 5 4
5 6 5
4 6 3
*/
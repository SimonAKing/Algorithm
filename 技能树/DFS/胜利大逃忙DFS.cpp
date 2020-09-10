#include<bits/stdc++.h>
using namespace std;
int N,M,T,x,y,F;
char Map[22][22];
bool Vis[22][22][1030];
const int Dir[4][2]={0,1,1,0,-1,0,0,-1};
inline void Init(){
	memset(Vis,0,sizeof(Vis));
	for(int i=0;i<N;++i){
		for(int j=0;j<M;++j){
			scanf("%c",*(Map+i)+j);
			if(Map[i][j]=='@'){x=i,y=j;}
		}
		if(i!=N-1)getchar();
	}
	F=Vis[x][y][0]=1;
}
inline void DFS(int x,int y,int t,int k){
	if(!F){return;}
	if(Map[x][y]=='^'&&t<T){
		printf("%d\n",t);
		F=0;return;
	}
	if(t+1>=T){return;}
	for(int i=0;i<4;++i){
		int tx=x+Dir[i][0];
		int ty=y+Dir[i][1];
		int K=k;
		if(tx<0||ty<0||tx>=N||ty>=M||Map[tx][ty]=='*'||Vis[tx][ty][k]){continue;}
		if(isupper(Map[tx][ty])&&!(k&1<<(Map[tx][ty]-'A'))){continue;}
		if(islower(Map[tx][ty])){K=k|(1<<(Map[tx][ty]-'a'));}
		if(!Vis[tx][ty][K]){
			Vis[tx][ty][K]=1;
			DFS(tx,ty,t+1,K);
		}
	}
}
int main(){
	while(~scanf("%d%d%d%*c",&N,&M,&T)){
	Init();DFS(x,y,0,0);if(F)puts("-1");}
	return 0;
}

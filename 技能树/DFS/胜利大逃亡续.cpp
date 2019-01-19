#include<bits/stdc++.h>
using namespace std;
int N,M,T;
char Map[22][22];
bool Vis[22][22][1030];
const int Dir[4][2]={0,1,1,0,-1,0,0,-1};
struct Node{
	int x,y,t,k;
};
queue<Node>Ac;
inline void Init(){
	while(!Ac.empty()){Ac.pop();}
	memset(Vis,0,sizeof(Vis));
	for(int i=0;i<N;++i){
		for(int j=0;j<M;++j){
			scanf("%c",*(Map+i)+j);
			if(Map[i][j]=='@'){
				Ac.push(Node{i,j,0,0});
				Vis[i][j][0]=1;
			}
		}
		if(i!=N-1)getchar();
	}
}
inline void BFS(){
	Node Now;
	while(!Ac.empty()){
		Now=Ac.front();
		Ac.pop();
		if(Map[Now.x][Now.y]=='^'&&Now.t<T){
			printf("%d\n",Now.t);return;
		}
		for(int i=0;i<4;++i){
			int tx=Now.x+Dir[i][0];
			int ty=Now.y+Dir[i][1];
			if(tx<0||ty<0||tx>=N||ty>=M||Map[tx][ty]=='*'||Vis[tx][ty][Now.k]){continue;}
			if(isupper(Map[tx][ty])&&!(Now.k&1<<(Map[tx][ty]-'A'))){continue;}
			int k=Now.k;
			if(islower(Map[tx][ty])){k=Now.k|(1<<(Map[tx][ty]-'a'));}
			if(!Vis[tx][ty][k]){
				Vis[tx][ty][k]=1;
				Ac.push(Node{tx,ty,Now.t+1,k});
			}
		}
	}
	puts("-1");
}
int main(){
	while(~scanf("%d%d%d%*c",&N,&M,&T)){Init();BFS();}
	return 0;
}

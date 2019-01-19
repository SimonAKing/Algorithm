#include<cstdio>
#include<cstring>
#include<queue>
#include<algorithm>
using namespace std;
const int maxn = 220;
bool Vis[maxn][maxn][11];
char Map[maxn][maxn];
int N,M,T;
const int Dir[4][2]={1,0,0,1,-1,0,0,-1};
struct Node{
	int x,y,steps,t;
	Node(){}
	Node(int _x,int _y,int _steps,int _t):x(_x),y(_y),steps(_steps),t(_t){}

};
queue<Node>Q;
inline void Init(){
	memset(Vis,false,sizeof(Vis));
	Node pNew;
	scanf("%d%d%d%*c",&M,&N,&T);
	for(int i=0;i<M;++i){
		for(int j=0;j<N;++j){
			scanf("%c",&Map[i][j]);
			if(Map[i][j]=='@'){
				pNew.x=i,pNew.y=j;
			}
		}
		if(i!=M-1)getchar();
	}
	pNew.steps=0;
	pNew.t=T;
	Q.push(pNew);
	Vis[pNew.x][pNew.y][T]=true;
}
inline void BFS(){
	Node p,v;
	while(!Q.empty()){
		p=Q.front();
		Q.pop();
		if(Map[p.x][p.y]=='+'){
			printf("%d\n",p.steps);
			return;
		}
		int tx,ty,t;
		for(int i=0;i<4;++i){
			t=p.t;
			tx=p.x+Dir[i][0];
			ty=p.y+Dir[i][1];
			if(tx<0 || ty<0 || tx>=M || ty>=N || Vis[tx][ty][t] || (Map[tx][ty]=='#' && p.t==0)){
				continue;
			}
			if(Map[tx][ty]=='#'){t--;}
			Vis[tx][ty][t]=true;
			v=Node(tx,ty,p.steps+1,t);
			Q.push(v);
		}
	}
	printf("-1\n");
}
int main(){
	Init();BFS();
	return 0;
}
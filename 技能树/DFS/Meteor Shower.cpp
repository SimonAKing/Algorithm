#include<cstdio>
#include<cstring>
#include<queue>
using namespace std;
#define INF 0x3f3f3f3f
const int maxn = 310;
const int Dir[4][2]={0,1,1,0,0,-1,-1,0};
int Map[maxn][maxn],T;
bool Vis[maxn][maxn];
struct Now{
	int x,y,steps;
}Temp,Val;
queue<Now>Q;
inline void Init(){
	int x,y,z;
	memset(Map,INF,sizeof(Map));
	memset(Vis,false,sizeof(Vis));
	while(T--){
		scanf("%d%d%d",&x,&y,&z);
		Map[x][y]=min(Map[x][y],z);
		Map[x+1][y]=min(Map[x+1][y],z);
		Map[x][y+1]=min(Map[x][y+1],z);
		if(x>0)Map[x-1][y]=min(Map[x-1][y],z);
		if(y>0)Map[x][y-1]=min(Map[x][y-1],z);
	}
	Vis[0][0]=true;
}
inline void BFS(){
	Temp.x=Temp.y=Temp.steps=0;
	Q.push(Temp);
	while(!Q.empty()){
		Val=Q.front();
		Q.pop();
		if(Map[Val.x][Val.y]==INF){
			printf("%d\n",Val.steps);
			return;
		}
		for(int i=0;i<4;++i){
			Temp.x=Val.x+Dir[i][0];
			Temp.y=Val.y+Dir[i][1];
			Temp.steps=Val.steps+1;
			if(Temp.x>=0 && Temp.y>=0 && Map[Temp.x][Temp.y]>Temp.steps && !Vis[Temp.x][Temp.y]){
				Vis[Temp.x][Temp.y]=true;
				Q.push(Temp);
			}
		}
	}
	printf("-1\n");
}
int main(){
	while(~scanf("%d",&T)){
		Init();
		BFS();
	}
	return 0;
}
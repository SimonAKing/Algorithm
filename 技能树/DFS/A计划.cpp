#include<bits/stdc++.h>
using namespace std;
char Map[2][11][11];
bool Vis[2][11][11];
int N,M,T,F;
const int Dir[4][2]={1,0,-1,0,0,1,0,-1};
inline void Init(){
	memset(Vis,0,sizeof(Vis));
	scanf("%d%d%d%*c",&N,&M,&T);
	for(int f=0;f<2;++f){
		for(int i=0;i<N;++i){
			for(int j=0;j<M;++j){
				scanf("%c",&Map[f][i][j]);
			}
			getchar();
		}
		if(f!=1)getchar();
	}
	F=Vis[0][0][0]=1;
}
inline void DFS(int z,int x,int y,int s){
	if(!F){return;}
	if(Map[z][x][y]=='P'&&s<=T){printf("YES\n");F=0;return;}
	if(s>=T){return;}
	for(int i=0;i<4;++i){
		int tx=x+Dir[i][0];
		int ty=y+Dir[i][1];
		if(tx<0||ty<0||tx>=N||ty>=M||Map[z][tx][ty]=='*'||Vis[z][tx][ty]){continue;}
		if(Map[z][tx][ty]=='#'&&(Map[!z][tx][ty]=='*'||Map[!z][tx][ty]=='#')){continue;}
		Vis[z][tx][ty]=1;
		if(Map[z][tx][ty]=='#'){DFS(!z,tx,ty,s+1);}
		else{DFS(z,tx,ty,s+1);} 
		Vis[z][tx][ty]=0;
	}
}
int main(){
	int C;
	scanf("%d",&C);
	while(C--){Init();DFS(0,0,0,0);if(F)puts("NO");}
	return 0;
}

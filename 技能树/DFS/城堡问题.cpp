/*
 一定要记住 & 符号的优先级 没有 == 高！
 
 想法：此题就是让求出 有多少联通块，并且求出最大联通块，三个变量即可解决
 	   第一个变量  记录 未访问联通块 的数量
	   第二个变量 记录 联通块的大小，每次DFS都要自加
	   第三个变量 永远指向第二个变量变化中的最大值 
*/

#include<bits/stdc++.h>
using namespace std;
const int maxn = 55;
int Map[maxn][maxn];
int Color[maxn][maxn];
int RoomNum,NowRoom,MaxRoom;
void DFS(int x,int y){
	if(Color[x][y]){return;}
	Color[x][y]=RoomNum;
	NowRoom++;
	if((Map[x][y]&1)==0){DFS(x,y-1);}
	if((Map[x][y]&2)==0){DFS(x-1,y);}
	if((Map[x][y]&4)==0){DFS(x,y+1);}
	if((Map[x][y]&8)==0){DFS(x+1,y);}
}
int main(){
	int N,M;
	scanf("%d%d",&N,&M);
	memset(Map,0,sizeof(Map));
	memset(Color,0,sizeof(Color));
	for(int i=1;i<=N;++i){
		for(int j=1;j<=M;scanf("%d",&Map[i][j++]));
	}
	MaxRoom=RoomNum=0;
	for(int i=1;i<=N;++i){
		for(int j=1;j<=M;++j){
			if(!Color[i][j]){
				RoomNum++;
				NowRoom=0;
				DFS(i,j);
				MaxRoom=max(MaxRoom,NowRoom);
			}
		}
	}
	printf("%d\n%d\n",RoomNum,MaxRoom);
	return 0;
}
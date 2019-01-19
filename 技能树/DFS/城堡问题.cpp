/*
 һ��Ҫ��ס & ���ŵ����ȼ� û�� == �ߣ�
 
 �뷨�������������� �ж�����ͨ�飬������������ͨ�飬�����������ɽ��
 	   ��һ������  ��¼ δ������ͨ�� ������
	   �ڶ������� ��¼ ��ͨ��Ĵ�С��ÿ��DFS��Ҫ�Լ�
	   ���������� ��Զָ��ڶ��������仯�е����ֵ 
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
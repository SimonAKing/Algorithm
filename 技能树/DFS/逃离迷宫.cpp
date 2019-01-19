#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int M,N,T,k,Sx,Sy,Tx,Ty;
struct node 
{
	char ch;
	int turn;
	int dir;
}map[150][150];

int dir[4][2]={0,1,1,0,0,-1,-1,0};

int dfs(int x,int y)
{
	int next_x,next_y;
	int i,flg;
	for (i=0;i<4;i++)
	{
		next_x=x+dir[i][0];
		next_y=y+dir[i][1];
		if (next_x>0&&next_x<=M&&next_y>0&&next_y<=N&&map[next_x][next_y].ch!='*')
		{
			flg=0;
			if (i!=map[x][y].dir)
			{
				flg=1;
			}
			if ((map[next_x][next_y].turn==-1||(map[x][y].turn+flg)<=map[next_x][next_y].turn)&&map[x][y].turn<=k&&(next_x!=Sx||next_y!=Sy))//判断下一位置的情况并剪枝
			{
				map[next_x][next_y].turn=map[x][y].turn+flg;
				map[next_x][next_y].dir=i;
				dfs(next_x,next_y);//从下一位置继续搜索
			}
		}
	}
	return 0;
}

int main(void)
{
	int i,j,MinTurn;
	scanf("%d",&T);
	while(T--)
	{
		scanf("%d%d",&M,&N);
		getchar();
		for (i=1;i<=M;i++)
		{
			for (j=1;j<=N;j++)
			{
				scanf("%c",&map[i][j].ch);
				map[i][j].turn=-1;
				map[i][j].dir=0;
			}
			getchar();
		}
		scanf("%d%d%d%d%d",&k,&Sy,&Sx,&Ty,&Tx);//注意列标在前行标在后
		map[Sx][Sy].dir=-1;
		dfs(Sx,Sy);
		MinTurn=map[Tx][Ty].turn;
		if (Sx==Tx&&Sy==Ty)//特殊判断起始位置和目标位置重合的情况,我就是被这个坑了一晚上
		{
			printf("yes\n");
		}
		else if (MinTurn<=k&&MinTurn!=-1) printf("yes\n");
		else printf("no\n");
	}
	return 0;
}
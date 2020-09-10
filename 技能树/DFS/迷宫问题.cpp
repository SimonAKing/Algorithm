2017年3月30日21:40:40
受教了。

#include<cstdio>
using namespace std;
int Map[5][5];
bool Vis[5][5]={0};
int Min=0x3f3f3f3f;
const int Dir[4][2]={1,0,0,1,-1,0,0,-1};
int MinStep[36][2]={0};
int NowStep[36][2]={0};
inline void DFS(int x,int y,int Step){
    if(x==4 && y==4){
        if(Step<Min){
            Min=Step;
            for(int i=0;i<Min;++i){
                MinStep[i][0]=NowStep[i][0];
                MinStep[i][1]=NowStep[i][1];
            }
        }
        return;
    }
    for(int i=0;i<4;++i){
        int px=x+Dir[i][0];
        int py=y+Dir[i][1];
        if(px<0 || py<0 || px>4 || py>4){continue;}
        if(Map[px][py]==0 && !Vis[px][py]){
            NowStep[Step][0]=px;
            NowStep[Step][1]=py;
            Vis[px][py]=1;
            DFS(px,py,Step+1);
            Vis[px][py]=0;
        }
    }
}
int main(){
    for(int i=0;i<5;++i){
        for(int j=0;j<5;scanf("%d",&Map[i][j++]));
    }
    DFS(0,0,1);
    for(int i=0;i<Min;++i){
        printf("(%d, %d)\n",MinStep[i][0],MinStep[i][1]);
    }
    return 0;
}

#include<bits/stdc++.h>
using namespace std;
#define INF 0x3f3f3f3f
const int maxn = 555;
int Map[maxn][maxn];
int Dis[maxn];
bool Vis[maxn];
int Sum[maxn];
int Num[maxn];
int Pre[maxn];
int Val[maxn];
int N,M,S,D;
void Init(){
    int x,y,z;
    scanf("%d%d%d%d",&N,&M,&S,&D);
    memset(Val,0,sizeof(Val));
    for(int i=0;i<N;scanf("%d",&Val[i++]));
    memset(Map,INF,sizeof(Map));
    for(int i=0;i<M;++i){
        scanf("%d%d%d",&x,&y,&z);
        Map[x][y]=min(Map[x][y],z);
        Map[y][x]=min(Map[y][x],z);
    }
    memset(Dis,0,sizeof(Dis));
    memset(Vis,false,sizeof(Vis));
    memset(Pre,-1,sizeof(Pre));
    fill(Sum,Sum+maxn,Val[S]);
    fill(Num,Num+maxn,1);
    Vis[S]=true;
    for(int i=0;i<N;++i){
        if(i!=S){
            Dis[i]=Map[S][i];
            Sum[i]+=Val[i];
            if(Map[S][i]!=INF){
                Pre[i]=S;
            }
        }
    }
}
void Dijkstra(){
    for(int i=0;i<N;++i){
        int Min=INF,k;
        for(int j=0;j<N;++j){
            if(Vis[j]==false && Min>Dis[j]){
                Min=Dis[j];
                k=j;
            }
        }
        if(Min==INF){break;}
        Vis[k]=true;

        for(int j=0;j<N;++j){
            if(!Vis[j]){
                if(Dis[j]>Dis[k]+Map[k][j]){
                    Dis[j]=Dis[k]+Map[k][j];
                    Sum[j]=Sum[k]+Val[j];
                    Num[j]=Num[k];
                    Pre[j]=k;
                }
                else if(Dis[j]==Dis[k]+Map[k][j]){
                    Num[j]+=Num[k];
                    if(Sum[j]<Sum[k]+Val[j]){
                        Sum[j]=Sum[k]+Val[j];
                        Pre[j]=k;
                    }
                }
            }
        }
    }
}
void Putout(){
    printf("%d %d\n",Num[D],Sum[D]);

    stack<int>Ac;
    for(int i=D;i!=-1;i=Pre[i]){
        Ac.push(i);
    }
    bool F=false;
    while(!Ac.empty()){
        if(F){printf(" ");}
        printf("%d",Ac.top());
        F=true;Ac.pop();
    }
    puts("");
}
int main(){
    Init();
    Dijkstra();
    Putout();
    return 0;
}

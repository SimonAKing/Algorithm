#include<bits/stdc++.h>
using namespace std;
char Map[2][11][11];
bool Vis[2][11][11];
int N,M,T;
const int Dir[4][2]={1,0,-1,0,0,1,0,-1};
struct Node{
    int x,y,z,s;
    Node(){}
    Node(int a,int b,int c,int d){
        x=a;y=b;z=c;s=d;
    }
};
queue<Node>Ac;
inline void Init(){
    int f,i,j;
    memset(Vis,false,sizeof(Vis));
    scanf("%d%d%d\n",&N,&M,&T);
    for(f=0;f<2;++f){
        for(i=0;i<N;++i){
            for(j=0;j<M;++j){
                scanf("%c",&Map[f][i][j]);
            }
            getchar();
        }
        if(f!=1)getchar();
    }
    while(!Ac.empty()){Ac.pop();}
    Vis[0][0][0]=1;Ac.push(Node(0,0,0,0));
}
inline void BFS(){
    Node Now,Next;
    int i;
    while(!Ac.empty()){
        Now=Ac.front();
        Ac.pop();
        if(Map[Now.z][Now.x][Now.y]=='P' && Now.s<=T){
            printf("YES\n");
            return;
        }
        if(Now.s>T){break;}
        Next.s=Now.s+1;
        for(i=0;i<4;++i){
            Next.x=Now.x+Dir[i][0];
            Next.y=Now.y+Dir[i][1];
            if(Next.x<0||Next.y<0||Next.x>=N||Next.y>=M||Map[Now.z][Next.x][Next.y]=='*'||Vis[Now.z][Next.x][Next.y]){continue;}
            if(Map[Now.z][Next.x][Next.y]=='#'&&(Map[!Now.z][Next.x][Next.y]=='*'||Map[!Now.z][Next.x][Next.y]=='#')){continue;}
            Map[Now.z][Next.x][Next.y]=='#'?Next.z=!Now.z:Next.z=Now.z;
            Vis[Next.z][Next.x][Next.y]=1;
            Ac.push(Next);
        }
    }
    printf("NO\n");
}
int main(){
    int C;
    scanf("%d",&C);
    while(C--){Init();BFS();}
    return 0;
}

#include<bits/stdc++.h>
using namespace std;
const int maxn = 150;
int P[maxn]={0};
struct Mj{
    set<int>A;
};
map<int,Mj>Ac;
set<int>::iterator Fa,Fb;
int PFind(int x){
    int r=x;
    while(r!=P[r]){r=P[r];}
    int i=x,j;
    while(P[i]!=r){
        j=P[i];
        P[i]=r;
        i=j;
    }
    return r;
}
void PMix(int x,int y){
    int Fx=PFind(x);
    int Fy=PFind(y);
    if(Fx!=Fy){P[Fx]=Fy;}
}
int main(){
    int N,M,K;
    int a,b,c;
    scanf("%d %d %d",&N,&M,&K);
    for(int i=1;i<=N;++i){
        P[i]=i;
    }
    for(int i=0;i<M;++i){
        scanf("%d %d %d",&a,&b,&c);
        if(c==1){PMix(a,b);}
        else{
            Ac[a].A.insert(b);
            Ac[b].A.insert(a);
        }
    }
    for(int i=0;i<K;++i){
        scanf("%d %d",&a,&b);
        int Pa=PFind(a);
        int Pb=PFind(b);
        bool F=true;
        Fa=Ac[a].A.find(b);
        if(Fa==Ac[a].A.end()){F=false;}
        if(Pa==Pb && !F)
            printf("No problem\n");
        else if(Pa!=Pb && !F)
            printf("OK\n");
        else if(Pa==Pb && F)
            printf("OK but...\n");
        else if(Pa!=Pb && F)
            printf("No way\n");
    }
    return 0;
}

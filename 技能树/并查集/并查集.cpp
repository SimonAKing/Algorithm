//http://blog.csdn.net/dellaserss/article/details/7724401/
#include<bits/stdc++.h>
using namespace std;
const int maxn =1e5;
int Ac[maxn];
bool Cmp[maxn];

int Find(int a){
    int r=a;
    while(r!=Ac[r]){r=Ac[r];}
    
    int i=a,j;
    while(Ac[i]!=r){
        j=Ac[i];
        Ac[i]=r;
        i=j;
    }
    
    return r;
}
void Mix(int x,int y){
    int Fx=Find(x);
    int Fy=Find(y);
    if(Fx!=Fy){Ac[Fx]=Fy;}
}
int main(){
    int N,M,P,a,b;
    scanf("%d",&N);
    memset(Ac,0,sizeof(Ac));
    memset(Cmp,0,sizeof(Cmp));
    for(int i=1;i<=N;++i){Ac[i]=i;}
    scanf("%d",&M);
    for(int i=0;i<M;++i){
        scanf("%d %d",&a,&b);
        Mix(a,b);
    }
    scanf("%d",&P);
    for(int i=0;i<P;++i){
        scanf("%d %d",&a,&b);
        
    }
    int Ans=0;
    for(int i=1;i<=N;++i){
        if(Cmp[Find(i)]){
            Ans++;
        }
    }
    printf("%d\n",Ans);
    return 0;
}

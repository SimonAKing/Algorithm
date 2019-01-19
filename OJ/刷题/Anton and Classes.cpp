#include<bits/stdc++.h>
using namespace std;
int main(){
    int N,M,a,b;
    int Mina,Maxa,Minb,Maxb;
    Mina=Minb=2e9;Maxa=Maxb=0;
    scanf("%d",&N);
    for(int i=0;i<N;++i){
        scanf("%d %d",&a,&b);
        if(a>Maxa)Maxa=a;
        if(Minb>b)Minb=b;
    }
    scanf("%d",&M);
    for(int i=0;i<M;++i){
        scanf("%d %d",&a,&b);
        if(a>Maxb)Maxb=a;
        if(Mina>b)Mina=b;
    }
    printf("%d\n",max(0,max(Maxb-Minb,Maxa-Mina)));
    return 0;
}

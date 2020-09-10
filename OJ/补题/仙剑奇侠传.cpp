#include<bits/stdc++.h>
using namespace std;
const int maxn=1010;
double Kill[15];
int c,n,h,val,Ac[maxn];
double WA,X;
double Count(){
    bool Flag=false;
    for(int i=0;i<c;++i){
        WA+=Ac[i]*(Kill[Ac[i]]/n);
        h-=Ac[i];
        if(h<=0){
            Flag=true;
            break;
        }
    }
    if(Flag)
        return WA;
    else
        Count();
}
int main(){
    while(~scanf("%d %d",&n,&h)){
        memset(Kill,0,sizeof(Kill));
        memset(Ac,0,sizeof(Ac));
        c=0;WA=0;X=0;
        for(int i=0;i<n;++i){
            scanf("%d",&val);
            Kill[val]++;
            if(Kill[val]<2){
                Ac[c++]=val;
            }
        }
        printf("%.2lf\n",Count());
    }
    return 0;
}

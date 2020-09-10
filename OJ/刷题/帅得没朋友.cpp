#include<bits/stdc++.h>
using namespace std;
set<int>Ac;
set<int>::iterator it;
int main(){
    int N,k,O;
    scanf("%d",&N);
    while(N--){
        scanf("%d",&k);
        for(int i=0;i<k;++i){
            scanf("%d",&O);
            if(k!=1){Ac.insert(O);}
        }
    }
    int M;bool F=false;
    scanf("%d",&M);
    for(int i=0;i<M;++i){
        scanf("%d",&O);
        it=Ac.find(O);
        if(it==Ac.end()){
            if(F){printf(" ");}
            printf("%05d",O);
            F=true;Ac.insert(O);
        }
    }
    if(!F){printf("No one is handsome");}
    printf("\n");
    return 0;
}

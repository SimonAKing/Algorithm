#include<bits/stdc++.h>
using namespace std;
const int maxn=100010;
int Ac[maxn];
int main(){
    int n,val;
    scanf("%d",&n);
    int c=0,z=0,num=0;
    memset(Ac,0,sizeof(Ac));
    for(int i=0;i<2*n;++i){
        scanf("%d",&val);
        Ac[val]++;
        if(Ac[val]==2){
            z--;
            Ac[val]=0;
        }
        if(Ac[val]==1){
            z++;
            if(num<z){
                num=z;
            }
        }
    }
    printf("%d\n",num);    
    return 0;
} 

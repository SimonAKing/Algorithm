#include<bits/stdc++.h> 
using namespace std;
const int maxn=5005;
int num[maxn];
int Ac[maxn];
int Gcd(int a,int b){
    int n=a,m=b,r;
    while(b!=0){
        r=b;
        b=a%b;
        a=r;
    }
    return n*m/a;
}
int main(){
    int n,val,u;
    while(~scanf("%d",&n)){
        memset(num,0,sizeof(num));
        u=0;
        for(int i=0;i<n;++i){
            scanf("%d",&val);
            num[val]++;
        }
        for(int i=1;i<5001;++i){
            if(num[i]!=0){
                Ac[u++]=i;
            }
        }
        if(u==1){
            printf("%d\n",val);
            continue;
        }
        int Max=0,max;
        for(int i=0;i<u-1;++i){
            for(int j=i+1;j<u;++j){
                max=Gcd(Ac[i],Ac[j]);
                if(max>Max){
                    Max=max;
                }
            }
        }
        printf("%d\n",Max);
    }   
    return 0;
}


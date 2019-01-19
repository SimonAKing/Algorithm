#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 120;
ll M[maxn]={0},a;
ll Z[maxn]={0},b;
ll gcd(ll x,ll y){
    return y?gcd(y,x%y):x;
}
int main(){
    int N,R=0;
    scanf("%d",&N);
    for(int i=0;i<N;++i){
        scanf("%lld/%lld",&a,&b);
        if(a!=0 && b!=0){
            Z[R]=a;
            M[R++]=b;
        }
    }
    if(R==0){
        printf("0\n");
        return 0;
    }
    ll g=0,sum=0;
    if(R==1){
        g=gcd(Z[0]%M[0],M[0]);
        if(Z[0]%M[0]==0){
            printf("%lld\n",Z[0]/M[0]);
        }
        else{
            if(Z[0]>M[0])
                printf("%lld %lld/%lld\n",Z[0]/M[0],Z[0]%M[0]/g,M[0]/g);

            else
                printf("%lld/%lld\n",Z[0]/g,M[0]/g);
        }
        return 0;
    }
    g=M[0]/gcd(M[0],M[1])*M[1];
    for(int i=2;i<R;++i){
        g=g/gcd(M[i],g)*M[i];
    }
    for(int i=0;i<R;++i){
        Z[i]*=g/M[i];
        sum+=Z[i];
    }
    ll k=gcd(sum%g,g);
    if(sum%g==0){
        printf("%lld\n",sum/g);
    }
    else{
        if(sum>g)
            printf("%lld %lld/%lld\n",sum/g,sum%g/k,g/k);
        else
            printf("%lld/%lld\n",sum%g/k,g/k);
    }
    return 0;
}

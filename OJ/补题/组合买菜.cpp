#include<bits/stdc++.h>
using namespace std;
const int maxn=50100;
long long A[maxn];
long long B[maxn];
long long C[maxn];
int main(){
    int n;
    while(~scanf("%d",&n)){
        memset(A,0,sizeof(A));
        memset(B,0,sizeof(B));
        memset(C,0,sizeof(C));
        for(int i=0;i<n;++i)
            scanf("%lld",A+i);
        B[0]=A[0];C[n-1]=A[n-1];
        int c=n-2;
        for(int i=1;i<n;++i,--c){
            B[i]=A[i]+B[i-1];
            C[c]=A[c]+C[c+1];
        }
        long long sum=0;
        for(int i=1;i<n-1;++i)
            sum+=B[i-1]*A[i]*C[i+1];
        printf("%lld\n",sum);
    }
    return 0;
}

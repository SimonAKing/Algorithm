#include<bits/stdc++.h>
using namespace std;
#define maxn 20010
int main(){
    long long num[maxn]={1,2,4,7};
    for(int i=4;i<maxn;++i)
        num[i]=num[i-1]+i;
    int L,n;
    while(~scanf("%d",&L)){
        while(L--){
            scanf("%d",&n);
            printf("%lld\n",num[n*2]);
        }
    }
    return 0;
}

#include<bits/stdc++.h>
using namespace std; 
int main(){
    long long num[52]={0,1,1,2};
    for(int i=4;i<52;++i)
        num[i]=num[i-1]+num[i-2];
    int n;
    while(~scanf("%d",&n)){
        printf("%lld\n",num[n]);
    }
    return 0;
}

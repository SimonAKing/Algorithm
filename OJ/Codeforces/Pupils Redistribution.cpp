#include<bits/stdc++.h>
using namespace std;
int a[120],c[120];
map<int,int>A,C;
int main(){
    int n;
    cin>>n;
    for(int i=1;i<=n;++i){
        cin>>a[i];
        A[a[i]]++;
    }
    for(int i=1;i<=n;++i){
        cin>>c[i];
        C[c[i]]++;
    }
    int ans=0;
    for(int i=1;i<=5;++i){
        if((A[i]+C[i])&1){
            cout<<"-1"<<endl;
            return 0;
        }
        else{
            ans+=abs(A[i]-C[i])/2;
        }
    }
    cout<<ans/2<<endl; 
    return 0;
} 

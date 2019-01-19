#include<bits/stdc++.h>
using namespace std;
int main(){
    string Ac;
    getline(cin,Ac);
    int L=Ac.size();
    int k,c,M=0,i,j;
    if(L==1){
        printf("1\n");
        return 0;
    }
    for(i=0;i<L-1;++i){
        k=i;c=0;
        for(j=L-1;j>=k;--j){
            if(Ac[k]==Ac[j]){
                c++;
                if(j-k==2){
                    c=c+c+1;
                    break;
                }
                if(j-k==1){
                    c=c+c;
                    break;
                }
                k++;
            }
            else{c=0;k=i;}
        }
        if(M<c && j-k<=2){M=c;}
    }
    printf("%d\n",M);
    return 0;
}

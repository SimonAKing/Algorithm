
#include<bits/stdc++.h>
using namespace std;
int main(){
    bool Aa=false;
    bool Bb=false;
    string A,B;
    int AA,BB;
    getline(cin,A,' ');
    getline(cin,B);
    int la=A.size();
    int lb=B.size();
    for(int i=0;i<la;++i){
        if(A[i]>'9' || A[i]<'0'){
            Aa=true;
            break;
        }
    }
    for(int i=0;i<lb;++i){
        if(B[i]>'9' || B[i]<'0'){
            Bb=true;
            break;
        }
    }
    stringstream bb;
    bb<<B;bb>>BB;
    stringstream aa;
    aa<<A;aa>>AA;
    if(BB<=0 || BB>1000){Bb=true;}
    if(AA<=0 || AA>1000){Aa=true;}
    if(Aa)
        printf("? + ");
    else
        printf("%d + ",AA);
    if(Bb)
        printf("? = ");
    else
        printf("%d = ",BB);
    if(Bb || Aa)
        printf("?\n");
    else
        printf("%d\n",AA+BB);
    return 0;
}

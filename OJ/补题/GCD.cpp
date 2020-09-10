#include<bits/stdc++.h> 
using namespace std;
int Gcd(int a,int b){
    return b?Gcd(b,a%b):a;
}
int main(){
    int T,A,B,C;
    int a,b,c,d,e,f;
    scanf("%d",&T);
    while(T--){
        scanf("%d %d %d %d %d %d",&a,&b,&c,&d,&e,&f);
        A=abs(a-d); B=abs(b-e); C=abs(c-f);
        printf("%d\n",Gcd(C,Gcd(A,B))+1);
    }
    return 0;
}

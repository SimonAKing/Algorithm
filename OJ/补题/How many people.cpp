#include<bits/stdc++.h>
using namespace std;
int main(){
    int a,b,c,ab,ac,bc,abc;
    while(scanf("%d %d %d %d %d %d %d",&a,&b,&c,&ab,&ac,&bc,&abc)){
        if(a==0 && b==0 && c==0 && ab==0 && ac==0 && bc==0 && abc==0){
            break;
        }
        printf("%d\n",a+b+c-ab-ac-bc+abc);
    }
    return 0;
} 

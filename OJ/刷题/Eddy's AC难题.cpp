#include <stdio.h>
#include <math.h>
int main(){
    _int64 n;
    while(scanf("%I64d",&n)!=EOF)
        printf("%I64d\n",(n-2)*pow(2,n-1)+1);
    return 0;
} 

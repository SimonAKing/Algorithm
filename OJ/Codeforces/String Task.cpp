/*
2017��3��1��15:16:15
����ʶ��Y��W ԭ���ǰ�Ԫ����ĸ 
*/
#include <iostream>
#include <cstdio>
#include <cstring>
using namespace std;
int main(){
    char A[110];
    scanf("%s",A);
    int len=strlen(A);     
    for(int i=0;i<len;++i){
        if(A[i]=='a'||A[i]=='A'||A[i]=='e'||A[i]=='E'||A[i]=='I'||A[i]=='i'||A[i]=='O'||A[i]=='o'||A[i]=='U'||A[i]=='u'||A[i]=='Y'||A[i]=='y'){
            continue;
        }
        else{
            if(A[i]>='A' && A[i]<='Z')
                printf(".%c",A[i]+32);
            else
                printf(".%c",A[i]);
        }
    } 
    return 0;
} 

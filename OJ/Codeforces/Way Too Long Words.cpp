/*
2017年3月1日14:28:48
不得不说，大水题
给你字符串，如果长度大于10，输出第一个字符 与 字符长度减 2 与 最后一个字符
否则 直接输出字符
还有，做水题 真过瘾 
*/
#include <iostream>
#include <cstdio>
#include <cstring>
using namespace std;
int main(){
    int n;
    char A[110];
    scanf("%d",&n);
    while(n--){
        scanf("%s",A);
        int len=strlen(A);
        if(len<=10)
            printf("%s\n",A);
        else
            printf("%c%d%c\n",A[0],len-2,A[len-1]);
    }
    return 0;
}

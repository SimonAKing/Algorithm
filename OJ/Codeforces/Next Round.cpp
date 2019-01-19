/*
2017年3月1日14:45:47
完全题意理解的锅 WA了两发
给出的K 是所求 数组中的元素有多少是大于 下标值为 K-1 的元素 的问题
而自己 却理解成数组中的元素有多少是大于 K的问题 。。。
坑点：如果循环到的数组元素为0 则直接跳出 不进行计数 
*/
#include <iostream>
#include <cstdio>
using namespace std;
int main(){
    int n,k,C=0,A[60];
    scanf("%d %d",&n,&k);
    for(int i=0;i<n;++i)
        scanf("%d",A+i);
    for(int i=0;i<n;++i){
        if(A[i]>=A[k-1])
            C++;
        else
            break;
    }
    printf("%d\n",C);
    return 0;
} 

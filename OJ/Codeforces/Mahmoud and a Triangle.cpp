/*
2017年2月28日22:17:33 
简单题：给你一组数，找出三个 是否能组成三角形
解题思路：先对数组进行排序，定义三个变量，一个为最短的长度，一个为中等长度，一个为最长的长度
然后进行判断：两边之和小于第三边，两边之差大于第三边
符合就直接输出YES return 循环后，如果没结素，就在外面输出NO 
*/ 
#include <stdio.h>
#include <algorithm>
using namespace std;
#define maxn 100010
int num[maxn];
int main(){
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
        scanf("%d",num+i);
    sort(num,num+n);
    int j,l;
    for(int i=0;i<n-2;i++){
        j=i+1;
        l=j+1;
        if(num[i]+num[j]>num[j] && num[l]-num[j]<num[i] ){
            printf("YES\n");
            return 0;
        }
    }
    printf("NO\n");
    return 0;
} 

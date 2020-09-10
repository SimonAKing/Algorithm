/*
2017年3月1日14:19:36 (这题做的很傻逼)
给你个数，判断是否可以 分成两个偶数
解题思路：如果给的数 是奇数直接输出NO
坑点：特么的 给的是 2 ，就会变成 一个 2 与 一个 0，完全大意(不细心) 
所以说 做题一定要细心，一定要考虑临界值，敏感值 
*/
#include <iostream> 
#include <cstdio>
using namespace std;
int main(){
    int n,m=0;
    scanf("%d",&n);
    if(n&1 || n==2){
        printf("NO\n");
        return 0;
    }
    printf("YES\n");
    return 0;
}

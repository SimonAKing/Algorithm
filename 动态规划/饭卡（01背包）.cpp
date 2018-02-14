#include <stdio.h>
#include <string.h>
#include <algorithm>
using namespace std;

const int maxn=1010;
int val[maxn];
int dp[maxn];

int main(){
    int n,i,j,money;
    while(~scanf("%d",&n)&&n){
        memset(val,0,sizeof(val));
        memset(dp,0,sizeof(dp));
        for(i=0;i<n;++i)
            scanf("%d",val+i);
        scanf("%d",&money);
        
        if(money<5){//低于5元直接输出 
            printf("%d\n",money);
            continue;
        }
        
        sort(val,val+n);
        int Max=val[n-1];
        money-=5;//用5元来买最贵的东西
        
        if(money>=val[0]){//如果剩下的钱 连最便宜的物品都买不起，那就不进行操作 
            for(i=0;i<n-1;++i){//i<n-1 因为最贵的东西 已经买走 
                for(j=money;j>=val[i];--j){
                    dp[j]=max(dp[j],dp[j-val[i]]+val[i]);//状态转移方程 
                    //dp[j]        : 在本次循环val[i]之前的 dp[j]的值 
                    //dp[j-val[i]] : 在本次循环中 剩下的钱 减去 val[i]之后 能买下的 物品的最大价位
                    //val[i]       ：在本次循环中 所用的钱
         //dp[j-val[i]]+val[i]：本次循环 所用的钱，加上 剩下的钱减去它之后，还能买下的最大价位 之和
         //比如 1 3 5 7 9 ，钱=15，钱-=5，钱=10  ：9是最贵的物品，不必考虑 当val[i]==7时：
         //dp[j]=9 (1,3,5) 与 3+7 求最大值，故 dp[钱]=10 (3,7)
 /*        
当第一次循环 val[i]==1 结束：钱10->1 的值全为：1
当第二次循环 val[i]==3 结束：钱10->4 的值全为：4(1+3),钱3的值为：3(3+0)
当第三次循环 val[i]==5 结束：钱10->9 的值全为：9(1+3+5),钱8的值为：8(3+5)，钱6 7的值为：6(1+5)
                             钱5的值为：5(5)
当第四次循环 val[i]==7 结束：钱10的值为：10(3+7),钱9的值为：9(1+3+5),钱8的值为：8(1+3+5)
                             钱7的值为：7  
*/ 
                } 
            } 
        }
        printf("%d\n",money+5-dp[money]-Max);
    }
    return 0;
}
/*
先利用贪心，先把 钱-=5，这5元用来买最贵重的东西，int Max = val[n-1]; 
然后循环遍历到 倒数第二个元素 ，因为最贵的东西 已经买走，然后对 钱-=5 的剩下钱 进行操作 
如果剩下的钱 连最便宜的东西 都买不成，就不进行操作  if(money>=val[0])

两层循环，第一层 遍历 n-1个价位，第二层 遍历 在剩下的钱中 能买下的 物品的最大价位
OK,举个例子：1 9 3 5 8，排序后：1 3 5 8 9，钱是15
当循环完毕后，dp数组情况为：
dp[1]=1; val[0]的值，                当 1元时 最多只能买下 val[0] 
dp[2]=1; val[0]的值，                当 2元时 最多只能买下 val[0] 
dp[3]=3; val[1]的值，                当 3元时 最多只能买下 val[1] 
dp[4]=4; val[1]与val[0]的值，        当 4元时 最多只能买下 val[0]与val[1] 
dp[5]=5; val[2]的值，                当 5元时 最多只能买下 val[2]
dp[6]=6; val[2]的值，                当 6元时 最多只能买下 val[2]
dp[7]=6; val[0]与val[2]的值，        当 7元时 最多只能买下 val[0]与val[2] 
dp[8]=8; val[1]与val[2]的值，        当 8元时 最多只能买下 val[1]与val[2] 
dp[9]=9; val[0]与val[1]与val[2]的值，当 9元时 最多只能买下 val[0]与val[1]与val[2] 
dp[10]=9;val[0]与val[1]与val[2]的值，当10元时 最多只能买下 val[0]与val[1]与val[2] 
也就是说，dp[m]：当钱数为 m时，能买下的最大价位。  

又所求结果 为：钱+5(初始的钱) -dp[钱](剩下的钱中 买下的 最大价位的物品) -Max(减去最贵重的物品) 
*/ 

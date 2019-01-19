//卧槽，DP就是特么的玄学，牛逼啊，玄学，玄学，，，玄学!!!niubi1 
#include <stdio.h>
#include <string.h>
#include <algorithm>
using namespace std;
const int maxn=1010;
int num[maxn];
int len[maxn];
int main(){
    int n,i,j;
    scanf("%d",&n);
    fill(len,len+maxn,1);
    fill(num,num+maxn,0);
    for(i=0;i<n;scanf("%d",&num[i++]));
    
    for(i=1;i<n;++i){
    	
        for(j=0;j<i;++j){
        	
            if(num[i]>num[j])
                len[i]=max(len[i],len[j]+1);
        
		}
    }
    
	printf("%d\n",*max_element(len,len+n));
    
	return 0;
}
/*
大致算法： 

1.开始额外建立一个 用来保存长度的数组

2.两层循环，第一层循环 遍历 除第一个元素之外的所有元素，
  以每个元素 为终点的想法。来找到：从第一个元素 到该元素的上升的长度 用数组保存,再找出最大值 
  
  注意 状态转移方程： len[i]=max(len[i],len[j]+1); 
  在 j点之前的 上升长度，与 加上j点的上升长度(故 len[j]+1)作比较，选出最大值
  
  比如 ：第一次循环，num[i] = 2，在此之前，只有 1 符合条件,故 len[1] = len[0]+1 = 2 
  举列子 1 2 3 2 5 当循环到 i=4时 : j=0时 len[4]=2;因为会选取 len[0]+1,目前序列为：1 5 
  j=1时，len[4]=3;因为在此之前，len[1]=2(len[0]+1) 所以会选取 len[1]+1,目前序列为：1 2 5
  j=2时，len[4]=4;因为在此之前，len[2]=3(len[1]+1) 所以会选取 len[2]+1,目前序列为：1 2 3 5
  j=3时，len[4]=4;因为在此之前，len[3]=2(len[0]+1) 所以会选取 len[4]，目前序列为：1 2 3 5
*/ 

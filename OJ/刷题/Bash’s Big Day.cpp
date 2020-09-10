//这题 和 "k-th divisor" 很相似，不过是把问题改个形式
//思路 ：利用哈希表的映射 ，把每个数的所有因子全部映射在数组上，然后找到数组中的最大值 便是Answer 
//关键 ： 无论是哪一种情况，最小值都是：1
//卡点 ： 脑残的把 i 设为全局变量 ，然后 就一直找错误 
#include <stdio.h>
#define maxn 100001
int num[maxn]={0};
void Mj(int val){
	for(int i=1;i*i<=val;i++){
		if(val%i==0){
			num[i]++;
			if(i*i!=val){
			num[val/i]++;
			}
		}
	}
}
int main(){
	int n,val;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d",&val);
		Mj(val);
	}
	int max=1;
	for(int i=2;i<maxn;i++){
		if(max<num[i]&&num[i]!=0){
			max=num[i];
		}
	}    
    printf("%d\n",max);
	return 0;
}

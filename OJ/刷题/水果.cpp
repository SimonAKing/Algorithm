/*
2017年3月11日16:30:22:
你刚才的错误  就是 map数组形式中 下标值不能为 容器形式，***********************但可以为结构体形式啊。
刚开始 map嵌套，以为很棒，可是 忘了关键的一点，嵌套是嵌套了，可是两个map之间的枢纽 无法构建
在然后 调试的结果不对，
大脑闭塞，进入死循环，结构体，pair什么的都试了一遍，浪费了不少时间，
如果你在关键处能重新思考问题，现在也不会如此失落。
*/
#include<bits/stdc++.h>
using namespace std;
string Pos,Val;
int T,N,Num;
struct Ac{//结构体的唯一成员 map容器
	map<string,int>a;
};
map<string,Ac>A;//map的嵌套，用结构体容器成员代替 map
map<string,Ac>::iterator it;
int main(){

	scanf("%d",&T);
	while(T--){
		A.clear();
		scanf("%d",&N);
		for(int i=0;i<N;++i){
			cin>>Val>>Pos>>Num;
			A[Pos].a[Val]+=Num;
			/*
			map<string,int>::iterator it;
			
			a[val]+=Num : map容器的最简单操作，根据 it->first作为下标值，
						  用it->second 保存 it->first出现的次数
						  
			问题来了，嵌套的map又该如何进行这次操作呢？
			上文提到，嵌套中的map是用结构体代替呢，其答案很简单
			大家都知道，结构体访问成员是用 “ . ” 来访问，这里也是如此
			
			map<string,结构体>::iterator It;
			
			A[Pos]:说明根据 It->first作为下标值，
			然后通过“ . ” ：访问 It->second.a
			再然后： a[Val] == It->second.a->first ,
			最后就是上文提到的 map简单操作
			
			相信桶排序大家都知道，就是分类排序
			这个代码的 map嵌套的过程就好比：
			输入   == 大坝放水
			A[Pos] == 水流下时经过的各个出口 
			a[Val] == 水流出 出口后要去的地方
			有的会汇集一出，用 +=Num 统计类型相同的个数，不然 就会 Pos不同 或者 Val 不同
			*/
		}
		for(it=A.begin();it!=A.end();++it){
			cout<<it->first<<endl;
			map<string,int>::iterator t=it->second.a.begin();
			/*
			it->second : 指向结构体 Ac   it->second.a ： 指向结构体 Ac中的 容器a 成员
			it->second.a.begin():指向结构体 Ac中的 容器a 成员 的开始
			*/
			for(;t!=it->second.a.end();++t){
				cout<<"   |----"<<t->first
				<<'('<<t->second<<')'<<endl;
			}
		}
		if(T){cout<<endl;}
	}
	return 0;
}

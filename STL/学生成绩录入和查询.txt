#include<bits/stdc++.h>
using namespace std;
struct Student{
	string Name;
	int Num;
}Wa;
int Score,G;
multimap<int,Student>Ac;//注意 定义时有技巧，因为整个过程是根据 分数在进行操作，
						//所以第一个 int 代表的就是分数，相当于索引
multimap<int,Student>::iterator it;
int main(){
	string Val;
	while(cin>>Val){
		if(Val[0]=='A'){
			cin>>Wa.Name>>Wa.Num>>Score;
			Ac.insert(make_pair(Score,Wa));
		}
		else if(Val[0]=='Q'){
			cin>>Score;
			it=Ac.lower_bound(Score);//查找第一个 小于等于 Score的迭代器
			if(it!=Ac.begin()){//如果第一个元素 都大于等于Score 则直接输出No
					
				--it;//it--：说明了lower_bound函数的特性，返回第一个大于或等于Score的迭代器
					//	 	 而 it-- 这步 刚好把 it定位在小于 score 的第一个迭代器 
					  
				Score=it->first;//小于 Score的第一个分数
				multimap<int,Student>::iterator maxp=it;//定义临时迭代器
			
				int maxId=it->second.Num;
				for(;it!=Ac.begin() && Score==it->first;it--){
					if(it->second.Num>maxId){
						maxp=it;
						maxId=it->second.Num;
					}
				}
				if(it->first==Score){//如果上面循环是因为 it == Ac.begin() 而终止，则it指向的元素还要处理 
					if(it->second.Num>maxId){
						maxp=it;
						maxId=it->second.Num;
					}
				}
				cout<<maxp->second.Name<<' '
					<<maxp->second.Num<<' '
					<<maxp->first<<endl;
			}
			else{cout<<"Nobody"<<endl;}
		}
		else{break;}
	}
	return 0;
}

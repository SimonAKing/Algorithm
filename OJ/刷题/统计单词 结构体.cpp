/// 统计单词  利用结构体排序
#include<bits/stdc++.h>
using namespace std;
struct Mj{
	string V;
	int Count;
}Mj[50];
typedef struct Mj Wa;
bool cmp(Wa x,Wa y){
	if(x.Count>y.Count)
		return true;
	else if(x.V>y.V)
		return false;
	else
		return true;
}
int main(){
	map<string,int>Ac;
	string S;int Val,N;
	cin>>N;
	for(int i=0;i<N;++i){
		cin>>S;
		++Ac[S];
	}
	map<string,int>::iterator it=Ac.begin();
	int i=0;
	while(it!=Ac.end()){
		Mj[i].V=it->first;
		Mj[i].Count=it->second;
		i++;it++;
	}

	sort(Mj,Mj+i,cmp);
	for(int j=0;j<i;++j){
		cout<<Mj[j].V<<' '<<Mj[j].Count<<endl;
	}
    return 0;
}

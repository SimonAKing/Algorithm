***set���Զ�������
struct Rule{
	
	bool operator() (const Word &x,const Word &y){
		xxxx.....
		yyyy.....
	}
};

--------------------------------------------------------------------------------------------------------------------------
#include<bits/stdc++.h>
using namespace std;
struct Word{
	string S;
	int Count;
};
struct Rule{
	bool operator() (const Word &x,const Word &y){
			if(x.Count>y.Count)
				return true;
			else if(x.S>y.S)
				return false;
			else
				return true;

	}
};


map<string,int>Ac;
set<Word,Rule>Wa;
int main(){
	int N;string Val;
	cin>>N;
	for(int i=0;i<N;++i){
		cin>>Val;
		Ac[Val]++;
	}
	map<string,int>::iterator it;
	for(it=Ac.begin();it!=Ac.end();++it){
		Word temp;
		temp.S=it->first;
		temp.Count=it->second;
		Wa.insert(temp);
	}
	set<Word,Rule>::iterator t;
	for(t=Wa.begin();t!=Wa.end();++t){��Ҫע����ǣ������õ����� ֱ��->���ʳ�Ա
		cout<< t->S <<' '<< t->Count <<endl;
	}
	return 0;
}

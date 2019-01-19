#include<bits/stdc++.h>
using namespace std;
vector<string>Ac;
vector<string>::iterator it;
char Val[10];
int main(){
	int n,c,b;
	while(~scanf("%d",&n) && n){
		Ac.clear();c=0;b=0;
		for(int i=0;i<n;++i){
			scanf("%s",Val);
			Ac.push_back(Val);
		}
		string Wa;
		for(it=Ac.begin();it!=Ac.end();++it){
			b=count(Ac.begin(),Ac.end(),*it);
			if(b>c){
				c=b;
				Wa=*it;
			}
		}
		cout<<Wa<<endl;
	}
	return 0;
}


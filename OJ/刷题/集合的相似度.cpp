#include<bits/stdc++.h>
using namespace std;
map<int,set<int> >Ac;
set<int>::iterator it,Find;
int main(){
	int N,M,K,x,y,Val;
	scanf("%d",&N);
	for(int i=1;i<=N;++i){
		scanf("%d",&M);
		for(int j=0;j<M;++j){
			scanf("%d",&Val);
			Ac[i].insert(Val);
		}
	}
	scanf("%d",&K);
	while(K--){
		scanf("%d %d",&x,&y);
		int L=Ac[x].size()+Ac[y].size();
		int Count=0;
		for(it=Ac[x].begin();it!=Ac[x].end();++it){
			Find=Ac[y].find(*it);
			if(Find!=Ac[y].end()){
				Count++;
			}
		}
		printf("%.2lf%c\n",double(Count)/(L-Count)*100.0,'%');
	} 
	return 0;
}
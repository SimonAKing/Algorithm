#include<bits/stdc++.h>
using namespace std;
map<string,int>Ac;
map<string,int>::iterator it;
char Val[8];
int main(){
	int N,M,k;
	scanf("%d%*c",&N);
	while(N--){
		scanf("%s%*c",Val);
		Ac[Val]=-1;
	}
	int Sum=0;
	scanf("%d%*c",&M);
	int m=M;
	while(M--){
		scanf("%s %d%*c",Val,&k);
		Sum+=k;
		if(Ac[Val]!=-1){
			Ac[Val]=k;
		}
	}
	Sum/=m;
	bool F=false;
	for(it=Ac.begin();it!=Ac.end();++it){
		if(it->second>Sum){
			F=true;
			cout<<it->first<<endl;
		}
	}
	if(!F){
		printf("Bing Mei You\n");
	}
	return 0;
}
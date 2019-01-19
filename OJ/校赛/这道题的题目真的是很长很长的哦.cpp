#include<bits/stdc++.h>
using namespace std;
int main(){
	int T;
	string Ac;
	while(~scanf("%d%*c",&T)){
		while(T--){
			getline(cin,Ac);
			int L=Ac.size();
			int Ans=1,Max=1;
			for(int i=0;i<L-1;++i){
				if(Ac[i]==Ac[i+1]){
					Ans++;
				}
				else{Ans=1;}
				Max=max(Ans,Max);
			}
			printf("%d\n",Max);
		}
	}
	return 0;
}

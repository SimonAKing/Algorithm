#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4+5;
struct Ants{
	int No,Pos,Dir;
	bool operator<(const Ants& A)const{
		return Pos<A.Pos;
	}
}Begin[maxn],End[maxn];
const char Idx[3][10]={"L","Turning","R"}; 
int No[maxn];
int main(){
	int C,L,T,N,Ca=0;
	scanf("%d",&C);
	while(C--){
		char Ch;
		scanf("%d%d%d",&L,&T,&N);
		for(int i=0;i<N;++i){
			scanf("%d %c",&Begin[i].Pos,&Ch);
			Begin[i].Dir=(Ch=='R'?1:-1);
			Begin[i].No=i;
			End[i]=Ants{0,Begin[i].Pos+Begin[i].Dir*T,Begin[i].Dir};
		}
		sort(Begin,Begin+N);
		for(int i=0;i<N;++i){
			No[Begin[i].No]=i;
		}
		sort(End,End+N);
		for(int i=0;i<N-1;++i){
			if(End[i].Pos==End[i+1].Pos){
				End[i].Dir=End[i+1].Dir=0;
			}
		}
		printf("Case #%d:\n",++Ca);
		for(int i=0;i<N;++i){
			int j=No[i];
			if(End[j].Pos<0||End[j].Pos>L)printf("Fell off\n");
			else printf("%d %s\n",End[j].Pos,Idx[End[j].Dir+1]);
		}
		printf("\n");
	}
	return 0;
}
#include<cstdio>
#include<set>
#include<cstring>
using namespace std;
const int maxn = 1e5;
bool Map[maxn];
set<int>Ac[maxn];
set<int>::iterator it;
int D,S,A[4];
inline bool Prime(int X){
	for(int i=2;i*i<=X;++i){
		if(X%i==0)
			return false;
	}
	return true;
}
inline void BFS(int r){
	it=Ac[r].find(D);
	if(it!=Ac[r].end()){
		printf("%d\n",r);
		return;
	}
	int R=r+1;bool Flag=false;
	for(it=Ac[r].begin();it!=Ac[r].end();++it){
		int q=*it/1000,qq=*it%1000;
		int b=*it/100%10,bb=qq%100;
		int bbb=*it/100,g=*it%10,gg=*it/10;
		for(int i=0;i<=9;++i){
			if(i!=0){A[0]=i*1000+qq;}
			A[1]=q*1000+i*100+bb;
			A[2]=bbb*100+i*10+g;
			A[3]=gg*10+i;
			for(int j=0;j<4;++j){
				if(!Map[A[j]]&&Prime(A[j])){
					Flag=Map[A[j]]=true;
					Ac[R].insert(A[j]);
				}
			}
		}
	}
	if(!Flag){
		printf("Impossible\n");
		return;
	}
	BFS(R);
}
int main(){
	int T;
	scanf("%d",&T);
	while(T--){
		for(int i=0;i<maxn;Ac[i++].clear());
		memset(Map,false,sizeof(Map));
		scanf("%d%d",&S,&D);
		Ac[0].insert(S);
		Map[S]=1;BFS(0);
	}
	return 0;
} 
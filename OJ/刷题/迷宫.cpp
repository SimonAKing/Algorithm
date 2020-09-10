#include<bits/stdc++.h>
using namespace std;
const int maxn = 520;
bool Flag=false;
int Ac[maxn][maxn],num[maxn],n,m,u=0;
void DFS(int Step,int x,int y,int b){
	if(x==n-1 && y==m-1){
		num[u++]=b;
		Flag=true;
		return;
	}
	if(Step==0){
		return;
	}
	bool A=true;
	if(x+Step<n){
		A=false;
		DFS(Ac[x+Step][y],x+Step,y,b+1);
	}
	if(x-Step>=0){
		A=false;
		DFS(Ac[x-Step][y],x-Step,y,b+1);
	}
	if(y+Step<m){
		A=false;
		DFS(Ac[x][y+Step],x,y+Step,b+1);
	}
	if(y-Step>=0){
		A=false;
		DFS(Ac[x][y-Step],x,y-Step,b+1);
	}
	if(A){return;}
}
int main(){
	scanf("%d %d",&n,&m);
	for(int i=0;i<n;++i){
		for(int j=0;j<m;scanf("%d",&Ac[i][j++]));
	}
	for(int i=0;i<n;++i){
		for(int j=0;j<m;printf("%d ",Ac[i][j++]));
	}
	DFS(Ac[0][0],0,0,0);
	if(Flag)
		printf("-1\n");
	else
		printf("%d\n",*min_element(num,num+u));
	return 0;
}


#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e5;
struct Ac{
	int Data;
	int Next;
}Node[maxn];
int A[maxn];
int C[maxn];
bool Compare[maxn];
int main(){
	int H,N,Adress,a,c;
	scanf("%d %d",&H,&N);
	memset(Compare,0,sizeof(Compare));
	for(int i=0;i<N;++i){
		scanf("%d",&Adress);
		scanf("%d %d",&Node[Adress].Data,&Node[Adress].Next);
	}
	a=c=0;
	for(int i=H;i!=-1;i=Node[i].Next){
		int Temp=abs(Node[i].Data);
		if(Compare[Temp]){
			C[c++]=i;
		}
		else{
			A[a++]=i;
			Compare[Temp]=true;
		}
	}
	printf("%05d %d ",A[0],Node[A[0]].Data);
	for(int i=1;i<a;++i){
		printf("%05d\n%05d %d ",A[i],A[i],Node[A[i]].Data);
	}
	printf("-1\n");
	if(c){
		printf("%05d %d ",C[0],Node[C[0]].Data);
		for(int i=1;i<c;++i){
			printf("%05d\n%05d %d ",C[i],C[i],Node[C[i]].Data);
		}
		printf("-1\n");
	}
	
	return 0;
}
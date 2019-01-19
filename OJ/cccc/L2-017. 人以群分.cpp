#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e6+10;
int Ac[maxn];
int main(){
	int N,O,I;
	scanf("%d",&N);
	for(int i=0;i<N;scanf("%d",&Ac[i++]));
	sort(Ac,Ac+N);
	int Mid=N/2;
	int A=0,B=0;
	for(int i=0;i<Mid;++i){
		A+=Ac[i];
	}
	for(int i=Mid;i<N;++i){
		B+=Ac[i];
	}
	I=N/2;
	O=N%2?I+1:I;
	printf("Outgoing #: %d\n",O);
	printf("Introverted #: %d\n",I);
	printf("Diff = %d\n",B-A);
	return 0;
}
#include<bits/stdc++.h>
using namespace std;
bool Cmp(int A){
	return A?true:false;
}
int main(){
	int N,M,Num[10];
	scanf("%d%d",&N,&M);
	int A=N,k=0;
	while(k!=M){
		memset(Num,0,sizeof(Num));
		Num[N%10]++;Num[N/10%10]++;
		Num[N/100%10]++;Num[N/1000]++;
		k=count_if(Num,Num+10,Cmp);
		N++;
	}
	printf("%d %04d\n",N-A-1,N-1);
	return 0;
}
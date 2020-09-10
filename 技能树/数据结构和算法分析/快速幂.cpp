#include<bits/stdc++.h>
using namespace std;
inline long long Pow(int N,unsigned int X){
	if(X==0)
		return 1;
	if(X==1)
		return N;
	if(X&1)
		return Pow(N*N,X/2)*N;
	else
		return Pow(N*N,X/2);
}
int main(){
	int N,X;
	scanf("%d %d",&N,&X);
	printf("%lld\n",Pow(N,X));
	return 0;
}
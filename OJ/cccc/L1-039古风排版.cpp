#include<bits/stdc++.h>
using namespace std;
int main(){
	int N,r=0;string A;
	scanf("%d%*c",&N);
	getline(cin,A);
	int L=A.size(),l=L;
	while(l%N!=0){
		A+=' ';
		l=A.size();
	}
	if(L>N){
		int F=L%N==0?L/N-1:L/N;
		while(r<N){
			for(int j=F;j>=0;--j){
				printf("%c",A[j*N+r]);
			}
			printf("\n");
			r++;
		}
	}
	else{
		for(int i=0;i<l;++i){
			printf("%c\n",A[i]);
		}
	}
	return 0;
} 
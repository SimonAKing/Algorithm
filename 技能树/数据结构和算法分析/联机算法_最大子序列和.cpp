#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4;
int Num[maxn];
inline void Solve(const int A[],int N){
	int ThisSum,MaxSum;
	ThisSum=MaxSum=0;
	for(int i=0;i<N;++i){
		ThisSum+=A[i];
		if(ThisSum>MaxSum){
			MaxSum=ThisSum;
		}
		else if(ThisSum<0){
			ThisSum=0;
		}
	}
	printf("%d\n",MaxSum);
}
int main(){
	int N;
	scanf("%d",&N);
	for(int i=0;i<N;scanf("%d",&Num[i++]));
	Solve(Num,N);
	return 0;
}
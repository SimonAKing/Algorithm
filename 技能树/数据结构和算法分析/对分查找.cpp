#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4;
int Num[maxn];
inline int BinarySearch(const int A[],int K,int N){
	int Low,Mid,High;
	Low=0;High=N-1;
	while(Low<=High){
		Mid=(Low+High)/2;
		if(A[Mid]<K){
			Low=Mid+1;
		}
		else if(A[Mid]>K){
			High=Mid-1;
		}
		else{
			return Mid;
		}
			
	}
	return -1;
}
int main(){
	int N,K;
	scanf("%d",&N);
	for(int i=0;i<N;scanf("%d",&Num[i++]));
	sort(Num,Num+N);
	scanf("%d",&K);
	printf("%d\n",BinarySearch(Num,K,N));
	return 0;
}
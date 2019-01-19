#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e5;
int A[maxn];
int B[maxn];
int Sum[maxn];
int main(){
	int N,M;
	cin>>N>>M;
	getchar();
	for(int i=0;i<N;++i){
		A[i]=getchar()-48;
	}
	getchar();
	for(int i=0;i<M;++i){
		B[i]=getchar()-48;
	}
	for(int i=0;i<N;++i){
		for(int j=0;j<M;++j){
			Sum[i+j]+=A[N-1-i]*B[M-1-j];
			if(Sum[i+j]>9){
				Sum[i+j+1]+=Sum[i+j]/10;
				Sum[i+j]%=10;
			}
		}
	}
	int L=N+M-2;
	if(Sum[L+1]){cout<<Sum[L+1];} 
	for(int i=L;i>=0;cout<<Sum[i--]);
	return 0;
}
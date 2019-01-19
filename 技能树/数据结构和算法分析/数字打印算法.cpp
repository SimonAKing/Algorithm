#include<bits/stdc++.h>
using namespace std;
inline void PrintOut(int N){
	if(N>=10){
		PrintOut(N/10);
	}
	printf("%d ",N%10);
}
int main(){
	int N;
	scanf("%d",&N);
	PrintOut(N);
	return 0;
} 
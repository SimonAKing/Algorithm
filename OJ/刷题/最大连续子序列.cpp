#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4+5;
int Ac[maxn];
int main(){
	//freopen("D:\In.txt","r",stdin); 
	int N,Sum,Max,L,R,P,C;
	while(~scanf("%d",&N)&&N){
		C=Sum=P=L=R=0;
		Max=INT_MIN;
		for(int i=0;i<N;++i){
			scanf("%d",&Ac[i]);
			if(Ac[i]<0){C++;}
			Sum+=Ac[i];
			if(Sum>Max){Max=Sum;R=Ac[i];L=Ac[P];}
			if(Sum<0){Sum=0;P=i+1;}
		}
		if(C==N)printf("0 %d %d\n",Ac[0],Ac[N-1]);
		else printf("%d %d %d\n",Max,L,R);  
	}
	return 0;
}
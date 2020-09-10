#include<bits/stdc++.h>
using namespace std;
int main(){
	int T,N,Num=0;
	scanf("%d",&T);
	while(T--){
		int Count=0;
		scanf("%d",&N);
		int M=N%1000;
		for(int i=1;i<=9;++i){
			int Temp=i*1000+M;
			int R=sqrt(Temp);
			if(R*R==Temp && Temp!=N){
				Count++;
			}
		}
		int a=N/1000;
		int b=N%1000%100;
		for(int i=0;i<=9;++i){
			int Temp=a*1000+i*100+b;
			int R=sqrt(Temp);
			if(R*R==Temp && Temp!=N){
				Count++;
			}
		}
		int c=N/100;
		int d=N%10;
		for(int i=0;i<=9;++i){
			int Temp=c*100+i*10+d;
			int R=sqrt(Temp);
			if(R*R==Temp && Temp!=N){
				Count++;
			}
		}
		int e=N/10;
		for(int i=0;i<=9;++i){
			int Temp=e*10+i;
			int R=sqrt(Temp);
			if(R*R==Temp && Temp!=N){
				Count++;
			}
		}
		printf("Case %d: %d\n",++Num,Count);
	}
	return 0;
}
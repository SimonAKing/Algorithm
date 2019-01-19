#include<bits/stdc++.h> 
using namespace std;
const int maxn = 1e6+5;

char Str[maxn];
char Ptr[maxn];
int Next[maxn]={0};

int main(){
	
	int N,A,B,L,R;
	scanf("%d%d%d%d%d%s",&N,&A,&B,&L,&R,Ptr);
	int TempB=0,TempA=0;
	for(int i=0;i<N;i++){
		if(i == 0){
			TempA=TempB = B;
		}
		else{
			TempA = TempB = (TempA + A)%N;
		}
		if(TempB >= L && TempB <=R && TempB%2==0 ){
			Str[i] = 'A';
		}
		else if(TempB >= L && TempB <=R && TempB%2==1 ){
			Str[i] = 'T';
		}
		else if((TempB<L||TempB>R)&&TempB%2==0){
			Str[i] = 'G';
		}
		else if((TempB<L||TempB>R)&&TempB%2==1){
			Str[i] = 'C';
		}
	}
	int Lp=strlen(Ptr);
	int Ans,k;
	for(int i=1;i<Lp;++i){
		k=Next[i-1];
		while(k && Ptr[i]!=Ptr[k]){k=Next[k-1];}
		Next[i]=Ptr[i]==Ptr[k]?k+1:0;
	}
	Ans=k=0;
	int Ls=strlen(Str);
	for(int i=0;i<Ls;++i){
		while(k && Ptr[k]!=Str[i]){k=Next[k-1];}
		if(Ptr[k]==Str[i]){++k;}
		if(k==Lp){++Ans;k=Next[k-1];}
	}
	printf("%d\n",Ans);
	return 0;
}
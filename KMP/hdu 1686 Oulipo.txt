#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e4+5;
int Next[maxn];
char Str[maxn];
char Ptr[maxn*100];
int main(){
	//freopen("H:\In.txt","r",stdin); 
	int T,k,Ans;
	Next[0]=0;
	scanf("%d%*c",&T);
	while(T--){
		gets(Str);gets(Ptr);
		int LS=strlen(Str);
		int LP=strlen(Ptr);
		for(int i=1;i<LS;++i){
			k=Next[i-1];
			while(k && Str[i]!=Str[k]){k=Next[k-1];}
			Next[i]=Str[i]==Str[k]?k+1:0;
		}
		Ans=k=0;
		for(int i=0;i<LP;++i){
			while(k && Str[k]!=Ptr[i]){k=Next[k-1];}
			if(Str[k]==Ptr[i]){++k;}
			if(k==LS){++Ans;k=Next[k-1];}
		}
		printf("%d\n",Ans);
	}
	return 0;
}
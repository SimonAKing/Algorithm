#include<bits/stdc++.h>
using namespace std;
int main(){
	string Ac;
	while(getline(cin,Ac)){
		int L=Ac.size();
		int A=0;
		bool T1,T2;
		T1=T2=false;
		for(int i=0;i<L;++i){
			if(Ac[i]=='1'){
				A++;
			}
			else{A=0;}
			if(A==7){
				T1=true;
			}
			if(A==3){
				T2=true;
			}
			if(T2 && Ac[i]=='0'){
				T2=false;
			}
		}
		if(T1 && T2){
			printf("����ľ���\n");
		}
		else if(T1){
			printf("�����С��\n");
		}
		else if(T2){
			printf("С��\n");
		}
		else{
			printf("ʲôҲû��\n");
		}
	}
	return 0;
}

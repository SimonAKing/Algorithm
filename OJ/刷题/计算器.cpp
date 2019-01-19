#include<bits/stdc++.h>
using namespace std;
string Ac;
int End;
inline float Solve(int Start){
	
	stringstream Mid;
	bool F=false;
	float Ans=0;
	float Temp=0;
	string Num="";
	char Judge='*';
	if(Ac[Start]=='-'){
		Num+='-';
		Start++;
	}
	for(int i=Start;i<End;++i){
		if((Ac[i]!='-')&&Ac[i]!='+'&&Ac[i]!='('&&Ac[i]!=')'){
			Num+=Ac[i];
		}
		else{
			Mid<<Num;
			Mid>>Temp;
			
			if(Ac[i]!='('&&Ac[i]!=')'){
				if(Num.empty()){
					continue;
				}
			}
		
			if(!F&&!Num.empty()){
				Ans=Temp;
				F=true;
		
			}
	
			if(Judge!='*'&&!Num.empty()){
				if(Judge=='+'){
					Ans+=Temp;
				}
				if(Judge=='-'){
					Ans-=Temp;
				}
				Judge='*';
			}
		    else{
		    	if(Ac[i]=='-'||Ac[i]=='+'){
					Judge=Ac[i];
				}
			}
		
			if(Ac[i]=='('){
				if(Judge=='+'){
					return Ans+=Solve(i+1);
				}
				if(Judge=='-'){
					return Ans-=Solve(i+1);
				}
			}
			if(Ac[i]==')'){
			
				return Ans;
			}
			Num.clear();
			Mid.clear();
		}	
	}
	return Ans;
	
}
int main(){
	int N;
	scanf("%d%*c",&N);
	getline(cin,Ac);
	End=Ac.size();
	
	float Answer=Solve(0);;

	if(Answer==int(Answer)){
		printf("%.f\n",Answer);
	}
	else{
		printf("%.6f\n",Answer);
	}
	
	return 0;
} 
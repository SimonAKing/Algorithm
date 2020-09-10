#include<bits/stdc++.h>
using namespace std;
queue<string>Ac;
map<string,bool>Vis;
int main(){
	int N;
	scanf("%d%*c",&N);
	string A,Min,B,Val;
	getline(cin,A);
    Ac.push(A);Min=A;
    while(!Ac.empty()){
        Val=Ac.front();
        Ac.pop();

        Min=min(Min,Val);

        B.clear();
        B+=Val[N-1];
        for(int i=1;i<N;++i){
            B+=Val[i-1];
        }
        if(!Vis[B]){
            Ac.push(B);
            Vis[B]=true;
        }

        for(int i=0;i<N;++i){
            int Temp=Val[i]-'0';
            Val[i]=(Temp+1)%10+'0';
        }
        if(!Vis[Val]){
            Ac.push(Val);
            Vis[Val]=true;
        }

    }
    cout<<Min<<endl;
	return 0;
}

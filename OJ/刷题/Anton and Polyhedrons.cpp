#include<bits/stdc++.h>
using namespace std;
vector<string>A;
string V;
int main(){
    int N;
    scanf("%d",&N);
    for(int i=0;i<N;++i){
        cin>>V;
        A.push_back(V);
    }
    vector<string>::iterator it;
    long long sum=0;
    for(it=A.begin();it!=A.end();++it){
        if(*it=="Tetrahedron"){
            sum+=4;
        }
        else if(*it=="Cube"){
            sum+=6;
        }
        else if(*it=="Octahedron"){
            sum+=8;
        }
        else if(*it=="Dodecahedron"){
            sum+=12;
        }
        else if(*it=="Icosahedron"){
            sum+=20;
        }
    }
    printf("%lld\n",sum);
    return 0;
}
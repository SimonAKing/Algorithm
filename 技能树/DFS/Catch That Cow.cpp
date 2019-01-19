#include<cstdio>
#include<cstring>
#include<queue>
#include<algorithm>
using namespace std;
const int maxn = 1e5+10;
int Visited[maxn*2];
struct Move{
    int Pos,Steps;
    Move(int a,int b):Pos(a),Steps(b){}
};
queue<Move>Ac;
int main(){
    int N,K;
    scanf("%d%d",&N,&K);
    memset(Visited,0,sizeof(Visited));
    Ac.push(Move(N,0));
    Visited[N]=1;
    while(!Ac.empty()){
        Move Val=Ac.front();
        if(Val.Pos==K){
            printf("%d\n",Val.Steps);
            return 0;
        }
        if(!Visited[Val.Pos+1]&& Val.Pos+1<=maxn ){
            Ac.push(Move(Val.Pos+1,Val.Steps+1));
            Visited[Val.Pos+1]=1;
        }
        if(!Visited[Val.Pos-1]&& Val.Pos-1>=0  ){
            Ac.push(Move(Val.Pos-1,Val.Steps+1));
            Visited[Val.Pos-1]=1;
        }
        if(!Visited[Val.Pos*2]&&Val.Pos*2<=maxn){
            Ac.push(Move(Val.Pos*2,Val.Steps+1));
            Visited[Val.Pos*2]=1;
        }
        Ac.pop();
    }
    return 0;
}

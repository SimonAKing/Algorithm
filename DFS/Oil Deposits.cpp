#include<cstdio>
#include<cstring>
using namespace std;
const int maxn=120;
char Val[maxn][maxn];
int Dir[8][2]={0,1,0,-1,1,0,-1,0,1,1,1,-1,-1,1,-1,-1}; 
void DFS(int x,int y){
    bool Flag=false;
    Val[x][y]='*';
    for(int i=0;i<8;++i){
    	int a=x+Dir[i][0];
    	int b=y+Dir[i][1];
    	if(Val[a][b]=='@'){
    		DFS(a,b);
    		Flag=true;
		}
	}
    if(!Flag){return;}
}
int main(){
    int n,m;
    while(~scanf("%d %d",&n,&m) && n,m){
        memset(Val,'0',sizeof(Val));
		int Count=0;
        for(int i=0;i<n;scanf("%s",Val[i++]));
        for(int i=0;i<n;++i){
            for(int j=0;j<m;++j){
                if(Val[i][j]=='@'){
                    Count++;DFS(i,j);    
                }
            }
        }
        printf("%d\n",Count);
    }
    return 0;
} 
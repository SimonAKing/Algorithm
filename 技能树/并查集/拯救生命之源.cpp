#include<bits/stdc++.h>
using namespace std;
const int maxn = 1e7+10;
int pre[1050];
int Ac[maxn];
int Find(int a){
    int r=a;
    while(r!=pre[r]){r=pre[r];}//Ñ°ÕÒ×æ×Ú
    return r;
}
void Mix(int x,int y,int n){
    int Fx=Find(x);
    int Fy=Find(y);
    if(Fx!=Fy){
        pre[Fx]=Fy;
        for(int i=1;i<=n;++i){
            if(pre[i]==Fx){
                pre[i]=Fy;
            }
        }
    }//×æ×ÚºÏÒ»
}
int main(){
	int m,a,b,i,j,ans,s,n;
	scanf("%d",&s);
	while(s--){
		memset(pre,0,sizeof(pre));
		memset(Ac,0,sizeof(Ac));
		scanf("%d%d",&n,&m);
		if(m==0){
			printf("1\n");
			continue;
		}
		for(i=1;i<=n;i++)
			pre[i]=i;
		for(i=0;i<m;i++){
			scanf("%d%d",&a,&b);
			Mix(a,b,n);
		}
		for(i=1;i<=n;i++)
			Ac[pre[i]]++;

		printf("%d\n",*max_element(Ac+1,Ac+n+1));
	}
	return 0;
}


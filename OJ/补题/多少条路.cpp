#include<bits/stdc++.h>
using namespace std;
struct AC{
    int Begin;
    int End;
}Mj[100];
bool Flag[100];
int n,m,c;
void Move(int i){
    if(Flag[i]==1){
        return;
    }
    Flag[i]=1; 
    if(Mj[i].End==n){
        c++;
        return;
    }
    bool k=true;int j; 
    for(j=0;j<m;++j){
        if(Mj[j].Begin==Mj[i].End){
                k=false;
                break;
        }
    }
    if(k)
        return;
    else
        Move(j);
    
}

int main(){
    while(~scanf("%d %d",&n,&m)){
        c=0;
        memset(Mj,0,sizeof(Mj));
        memset(Flag,0,sizeof(Flag));
        bool G=false,g=false;
        for(int i=0;i<m;++i){
            scanf("%d %d",&Mj[i].Begin,&Mj[i].End);
            if(Mj[i].Begin==1){
                G=true;
            }
            if(Mj[i].End==n){
                g=true;
            }
        }
        if(!G || !g){
            printf("0\n");
            continue;
        } 
        for(int i=0;i<m;++i){
            if(Mj[i].Begin==1){
                Move(i);
            }
        }
        printf("%d\n",c);
    }
    return 0;
}

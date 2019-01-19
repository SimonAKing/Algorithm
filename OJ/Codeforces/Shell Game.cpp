/*
sj:2017年2月28日22:15:41 
此题利用枚举，遍历三个初始化位置
另外，此题还有规律，6个一循环，所以 移动的总数：n%6
如果经过移动后得的结果 等于输入的位置，而返回后直接结束，否则 继续遍历
两个关键点：1.枚举三个位置      2.6个一循环(在此谢谢康瑞大神的指导) 
*/
#include <stdio.h>
long long  n,pos;
bool Move(int O){
    int A=O;
    for(int i=1;i<=n%6;++i){
        if(i&1){
            if(O==0)
                O=1;
            else if(O==1)
                O=0;
        }
        else{
            if(O==1)
                O=2;
            else if(O==2)
                O=1; 
        }
    }
    if(O==pos){
        printf("%d\n",A);
        return true;
    }
    return false;
}
int main(){
    scanf("%lld %lld",&n,&pos);
    for(int i=2;i>=0;--i){
        if(Move(i)){
            return 0;
        }
    }
}

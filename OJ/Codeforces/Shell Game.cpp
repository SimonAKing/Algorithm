/*
sj:2017��2��28��22:15:41 
��������ö�٣�����������ʼ��λ��
���⣬���⻹�й��ɣ�6��һѭ�������� �ƶ���������n%6
��������ƶ���õĽ�� ���������λ�ã������غ�ֱ�ӽ��������� ��������
�����ؼ��㣺1.ö������λ��      2.6��һѭ��(�ڴ�лл��������ָ��) 
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

/*
set����:ɾ���ظ�Ԫ�أ�������

ע�⣺����set�����������±�ֵ�İ취���в��������Զ���λ�õĲ����취���£�

lower_bound()����һ�� iterator ��ָ����[first,last)��ǵ����������п��Բ���value��
�������ƻ�����˳��ĵ�һ��λ�ã������λ�ñ����һ�����ڵ���value ��ֵ����
��
���磬���������У�����ia[]={12,15,17,19,20,22,23,26,29,35,40,51};
��ֵ21����lower_bound(),����һ��ָ��22��iterator����ֵ22����lower_bound(),Ҳ����һ��ָ��22��iterator��
iterator upper_bound( const key_type &key ):����һ����������ָ���ֵ> key�ĵ�һ��Ԫ�ء�
����lower_bound()��first��last�е�ǰ�պ�������ж��ֲ��ң����ش��ڻ����val�ĵ�һ��Ԫ��λ�á�
�������Ԫ�ض�С��val���򷵻�last��λ��

�������£�
һ������number����Ϊ��4,10,11,30,69,70,96,100.��Ҫ��������3,9,111.posΪҪ�����λ�õ��±�
��
pos = lower_bound( number, number + 8, 3) - number��pos = 0.��number������±�Ϊ0��λ�á�
pos = lower_bound( number, number + 8, 9) - number�� pos = 1����number������±�Ϊ1��λ�ã���10���ڵ�λ�ã���
pos = lower_bound( number, number + 8, 111) - number�� pos = 8����number������±�Ϊ8��λ��
�����±�����Ϊ7�����Է������һ��Ԫ�ص���һ��Ԫ�أ���
���ԣ�Ҫ��ס������lower_bound()��first��last�е�ǰ�պ�������ж��ֲ��ң����ش��ڻ����val�ĵ�һ��Ԫ��λ�á�
�������Ԫ�ض�С��val���򷵻�last��λ�ã���last��λ����Խ��ģ���~

���ز���Ԫ�صĵ�һ���ɰ���λ�ã�Ҳ���ǡ�Ԫ��ֵ>=����ֵ���ĵ�һ��Ԫ�ص�λ��

*/
#include<bits/stdc++.h>
using namespace std;
/*struct Rule{
    int x,y;
    bool operator < (const struct Rule tmp) const
    {
        if(x == tmp.x)
            return y < tmp.y ;
        return x < tmp.x ;
    }

};*/
int Val;
int main(){
    set<int>A;
    for(int i=0;i<3;++i){
        cin>>Val;
        A.insert(Val);
    }
    /*set<int>::iterator it;
    for(it=A.begin();it!=A.end();++it){
        cout<<*it<<' ';
    }*/
    for(int i=0;i<3;++i){
        cout<<A[i]<<' ';
    }
    return 0;
}

2017��3��20��10:10:26

set������ ���鷽ʽ���ʣ� 
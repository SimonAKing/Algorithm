/*
2017��3��1��14:45:47
��ȫ�������Ĺ� WA������
������K ������ �����е�Ԫ���ж����Ǵ��� �±�ֵΪ K-1 ��Ԫ�� ������
���Լ� ȴ���������е�Ԫ���ж����Ǵ��� K������ ������
�ӵ㣺���ѭ����������Ԫ��Ϊ0 ��ֱ������ �����м��� 
*/
#include <iostream>
#include <cstdio>
using namespace std;
int main(){
    int n,k,C=0,A[60];
    scanf("%d %d",&n,&k);
    for(int i=0;i<n;++i)
        scanf("%d",A+i);
    for(int i=0;i<n;++i){
        if(A[i]>=A[k-1])
            C++;
        else
            break;
    }
    printf("%d\n",C);
    return 0;
} 

/*
2017��3��1��14:00:42 
���⣺����������ǰ����Ϊ��ɳ����εĳ��Ϳ���һ��Ϊ�����εı߳�������Ҫ�����������ܸ���ס������

����˼·�� ���ҵ������ε����߳�max����С�߳�min����������εı߳� ����max��ֱ�����1 return 0��
��������εı߳�����min����� max%a==0 ���max/a ������� max/a+1
ע�⣬�������������� һ��Ҫ�����ҳ�����Ȼ ����Ĳ��� max/a �� min/a û׼����� 0
��� max%a ==0 ���� min%a==0 ��� max/a * min*a ���� �ͼ�һ(ʣ��ռ䲹ȫ)
�ӵ㣺����long long�ͣ���Ȼ����� 
*/
#include <iostream>
#include <cstdio>
int main(){
    long long n,m,a;
    scanf("%lld %lld %lld",&n,&m,&a);
    long long max=n>=m?n:m;
    long long min=n>m?m:n;
    if(a>=max){
        printf("1\n");
        return 0;
    }
    if(a>=min){
        if(max%a!=0)
            printf("%lld\n",(max/a+1));
        else
            printf("%lld\n",max/a);
        return 0;
    }
    if(max%a){
        if(min%a)
            printf("%lld\n",(max/a+1)*(min/a+1));
        else
            printf("%lld\n",(max/a+1)*(min/a));
        return 0;
    }
    else{
        if(min%a)
            printf("%lld\n",(max/a)*(min/a+1));
        else
            printf("%lld\n",(max/a)*(min/a));
        return 0;
    }
}

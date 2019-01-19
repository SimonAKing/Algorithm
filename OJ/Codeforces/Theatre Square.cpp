/*
2017年3月1日14:00:42 
题意：给三个数，前两个为组成长方形的长和宽，后一个为正方形的边长，求需要几个正方形能覆盖住长方形

解题思路： 先找到长方形的最大边长max，最小边长min，如果正方形的边长 大于max，直接输出1 return 0；
如果正方形的边长大于min，如果 max%a==0 输出max/a 否则输出 max/a+1
注意，上面这两个条件 一定要先行找出，不然 下面的操作 max/a 或 min/a 没准会出现 0
如果 max%a ==0 并且 min%a==0 输出 max/a * min*a 否则 就加一(剩余空间补全)
坑点：必须long long型，不然会溢出 
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

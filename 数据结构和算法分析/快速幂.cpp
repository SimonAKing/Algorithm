#include <stdio.h>
typedef long long ll;
ll po(ll n,ll k){
    ll ans=n;
    ll x=1;
    while(k){//n的二进制末尾 为1，时 返回值 与 临时值 进行模运算，为0，时 临时值进行模运算 
        if(k&1){
            x*=ans;
        }
        ans*=ans;
        k>>=1;
    }
    return x;
}
/*
例子：求3的93次幂
93的二进制：1011101
1 0 1 1 1 0 1
0 1 2 3 4 5 6

3^93=3^1 * 3^4 * 3^8 * 3^16 * 3^64 
=3^(2^0) * 3^(2^2) * 3^(2^3) * 3^(2^4) * 3^(2^6)

注意到，3^(2^n) 这里的 n 的取值范围 便是：93的二进制中 1 所在的位置 

以及上面的程序，当 K的二进制的末尾 不为1 时，临时值 进行模运算，
也就是 跳出 末尾二进制为0的时候 

然后当 K的末尾二进制 为1 时，返回值 与临时值 进行运算

这就是 快速幂的精髓所在 

*/ 
int main(){
    ll n;
    printf("请输入一个整数: ");
    scanf("%lld",&n);
    ll k;
    printf("请输入%d要求的次幂数：",n);
    scanf("%lld",&k);
    printf("%lld的%lld次幂是：%lld\n",n,k,po(n,k));
    return 0;
} 

OK,今天做下快速幂的总结：
先来说下递归版的快速幂：
X的零次幂 ： 1
X的一次幂 ： X
X的二次幂 ： X*X
X的三次幂 ： X*X*X
下面的伪代码，很好的说明了 快速幂和递归的特性。 
inline long long Pow(int N,int X){
	if(X==0)
		return 1;
	if(X==1)
		return N;
	if(X&1)
		return Pow(N*N,X/2)*N;
	else
		return Pow(N*N,X/2);
}

学于杨福康学长 
inline long long Pow(int N,int X){
	int Temp=N;
	int Ans=1;
	while(X){
		if(X&1){
			Ans*=Temp;
		}
		Temp*=Temp;
		X>>=1;
	}
	return Ans;
}

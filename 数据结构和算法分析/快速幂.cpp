#include <stdio.h>
typedef long long ll;
ll po(ll n,ll k){
    ll ans=n;
    ll x=1;
    while(k){//n�Ķ�����ĩβ Ϊ1��ʱ ����ֵ �� ��ʱֵ ����ģ���㣬Ϊ0��ʱ ��ʱֵ����ģ���� 
        if(k&1){
            x*=ans;
        }
        ans*=ans;
        k>>=1;
    }
    return x;
}
/*
���ӣ���3��93����
93�Ķ����ƣ�1011101
1 0 1 1 1 0 1
0 1 2 3 4 5 6

3^93=3^1 * 3^4 * 3^8 * 3^16 * 3^64 
=3^(2^0) * 3^(2^2) * 3^(2^3) * 3^(2^4) * 3^(2^6)

ע�⵽��3^(2^n) ����� n ��ȡֵ��Χ ���ǣ�93�Ķ������� 1 ���ڵ�λ�� 

�Լ�����ĳ��򣬵� K�Ķ����Ƶ�ĩβ ��Ϊ1 ʱ����ʱֵ ����ģ���㣬
Ҳ���� ���� ĩβ������Ϊ0��ʱ�� 

Ȼ�� K��ĩβ������ Ϊ1 ʱ������ֵ ����ʱֵ ��������

����� �����ݵľ������� 

*/ 
int main(){
    ll n;
    printf("������һ������: ");
    scanf("%lld",&n);
    ll k;
    printf("������%dҪ��Ĵ�������",n);
    scanf("%lld",&k);
    printf("%lld��%lld�����ǣ�%lld\n",n,k,po(n,k));
    return 0;
} 

OK,�������¿����ݵ��ܽ᣺
����˵�µݹ��Ŀ����ݣ�
X������� �� 1
X��һ���� �� X
X�Ķ����� �� X*X
X�������� �� X*X*X
�����α���룬�ܺõ�˵���� �����ݺ͵ݹ�����ԡ� 
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

ѧ�����ѧ�� 
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

//���� �� "k-th divisor" �����ƣ������ǰ�����ĸ���ʽ
//˼· �����ù�ϣ���ӳ�� ����ÿ��������������ȫ��ӳ���������ϣ�Ȼ���ҵ������е����ֵ ����Answer 
//�ؼ� �� ��������һ���������Сֵ���ǣ�1
//���� �� �Բеİ� i ��Ϊȫ�ֱ��� ��Ȼ�� ��һֱ�Ҵ��� 
#include <stdio.h>
#define maxn 100001
int num[maxn]={0};
void Mj(int val){
	for(int i=1;i*i<=val;i++){
		if(val%i==0){
			num[i]++;
			if(i*i!=val){
			num[val/i]++;
			}
		}
	}
}
int main(){
	int n,val;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d",&val);
		Mj(val);
	}
	int max=1;
	for(int i=2;i<maxn;i++){
		if(max<num[i]&&num[i]!=0){
			max=num[i];
		}
	}    
    printf("%d\n",max);
	return 0;
}

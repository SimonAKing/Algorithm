//�Բۣ�DP������ô����ѧ��ţ�ư�����ѧ����ѧ��������ѧ!!!niubi1 
#include <stdio.h>
#include <string.h>
#include <algorithm>
using namespace std;
const int maxn=1010;
int num[maxn];
int len[maxn];
int main(){
    int n,i,j;
    scanf("%d",&n);
    fill(len,len+maxn,1);
    fill(num,num+maxn,0);
    for(i=0;i<n;scanf("%d",&num[i++]));
    
    for(i=1;i<n;++i){
    	
        for(j=0;j<i;++j){
        	
            if(num[i]>num[j])
                len[i]=max(len[i],len[j]+1);
        
		}
    }
    
	printf("%d\n",*max_element(len,len+n));
    
	return 0;
}
/*
�����㷨�� 

1.��ʼ���⽨��һ�� �������泤�ȵ�����

2.����ѭ������һ��ѭ�� ���� ����һ��Ԫ��֮�������Ԫ�أ�
  ��ÿ��Ԫ�� Ϊ�յ���뷨�����ҵ����ӵ�һ��Ԫ�� ����Ԫ�ص������ĳ��� �����鱣��,���ҳ����ֵ 
  
  ע�� ״̬ת�Ʒ��̣� len[i]=max(len[i],len[j]+1); 
  �� j��֮ǰ�� �������ȣ��� ����j�����������(�� len[j]+1)���Ƚϣ�ѡ�����ֵ
  
  ���� ����һ��ѭ����num[i] = 2���ڴ�֮ǰ��ֻ�� 1 ��������,�� len[1] = len[0]+1 = 2 
  ������ 1 2 3 2 5 ��ѭ���� i=4ʱ : j=0ʱ len[4]=2;��Ϊ��ѡȡ len[0]+1,Ŀǰ����Ϊ��1 5 
  j=1ʱ��len[4]=3;��Ϊ�ڴ�֮ǰ��len[1]=2(len[0]+1) ���Ի�ѡȡ len[1]+1,Ŀǰ����Ϊ��1 2 5
  j=2ʱ��len[4]=4;��Ϊ�ڴ�֮ǰ��len[2]=3(len[1]+1) ���Ի�ѡȡ len[2]+1,Ŀǰ����Ϊ��1 2 3 5
  j=3ʱ��len[4]=4;��Ϊ�ڴ�֮ǰ��len[3]=2(len[0]+1) ���Ի�ѡȡ len[4]��Ŀǰ����Ϊ��1 2 3 5
*/ 

/*
2017��3��11��16:30:22:
��ղŵĴ���  ���� map������ʽ�� �±�ֵ����Ϊ ������ʽ��***********************������Ϊ�ṹ����ʽ����
�տ�ʼ mapǶ�ף���Ϊ�ܰ������� ���˹ؼ���һ�㣬Ƕ����Ƕ���ˣ���������map֮�����Ŧ �޷�����
��Ȼ�� ���ԵĽ�����ԣ�
���Ա�����������ѭ�����ṹ�壬pairʲô�Ķ�����һ�飬�˷��˲���ʱ�䣬
������ڹؼ���������˼�����⣬����Ҳ�������ʧ�䡣
*/
#include<bits/stdc++.h>
using namespace std;
string Pos,Val;
int T,N,Num;
struct Ac{//�ṹ���Ψһ��Ա map����
	map<string,int>a;
};
map<string,Ac>A;//map��Ƕ�ף��ýṹ��������Ա���� map
map<string,Ac>::iterator it;
int main(){

	scanf("%d",&T);
	while(T--){
		A.clear();
		scanf("%d",&N);
		for(int i=0;i<N;++i){
			cin>>Val>>Pos>>Num;
			A[Pos].a[Val]+=Num;
			/*
			map<string,int>::iterator it;
			
			a[val]+=Num : map��������򵥲��������� it->first��Ϊ�±�ֵ��
						  ��it->second ���� it->first���ֵĴ���
						  
			�������ˣ�Ƕ�׵�map�ָ���ν�����β����أ�
			�����ᵽ��Ƕ���е�map���ýṹ������أ���𰸺ܼ�
			��Ҷ�֪�����ṹ����ʳ�Ա���� �� . �� �����ʣ�����Ҳ�����
			
			map<string,�ṹ��>::iterator It;
			
			A[Pos]:˵������ It->first��Ϊ�±�ֵ��
			Ȼ��ͨ���� . �� ������ It->second.a
			��Ȼ�� a[Val] == It->second.a->first ,
			�����������ᵽ�� map�򵥲���
			
			����Ͱ�����Ҷ�֪�������Ƿ�������
			�������� mapǶ�׵Ĺ��̾ͺñȣ�
			����   == ��ӷ�ˮ
			A[Pos] == ˮ����ʱ�����ĸ������� 
			a[Val] == ˮ���� ���ں�Ҫȥ�ĵط�
			�еĻ�㼯һ������ +=Num ͳ��������ͬ�ĸ�������Ȼ �ͻ� Pos��ͬ ���� Val ��ͬ
			*/
		}
		for(it=A.begin();it!=A.end();++it){
			cout<<it->first<<endl;
			map<string,int>::iterator t=it->second.a.begin();
			/*
			it->second : ָ��ṹ�� Ac   it->second.a �� ָ��ṹ�� Ac�е� ����a ��Ա
			it->second.a.begin():ָ��ṹ�� Ac�е� ����a ��Ա �Ŀ�ʼ
			*/
			for(;t!=it->second.a.end();++t){
				cout<<"   |----"<<t->first
				<<'('<<t->second<<')'<<endl;
			}
		}
		if(T){cout<<endl;}
	}
	return 0;
}

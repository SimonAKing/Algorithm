#include<bits/stdc++.h>
using namespace std;
struct Student{
	string Name;
	int Num;
}Wa;
int Score,G;
multimap<int,Student>Ac;//ע�� ����ʱ�м��ɣ���Ϊ���������Ǹ��� �����ڽ��в�����
						//���Ե�һ�� int ����ľ��Ƿ������൱������
multimap<int,Student>::iterator it;
int main(){
	string Val;
	while(cin>>Val){
		if(Val[0]=='A'){
			cin>>Wa.Name>>Wa.Num>>Score;
			Ac.insert(make_pair(Score,Wa));
		}
		else if(Val[0]=='Q'){
			cin>>Score;
			it=Ac.lower_bound(Score);//���ҵ�һ�� С�ڵ��� Score�ĵ�����
			if(it!=Ac.begin()){//�����һ��Ԫ�� �����ڵ���Score ��ֱ�����No
					
				--it;//it--��˵����lower_bound���������ԣ����ص�һ�����ڻ����Score�ĵ�����
					//	 	 �� it-- �ⲽ �պð� it��λ��С�� score �ĵ�һ�������� 
					  
				Score=it->first;//С�� Score�ĵ�һ������
				multimap<int,Student>::iterator maxp=it;//������ʱ������
			
				int maxId=it->second.Num;
				for(;it!=Ac.begin() && Score==it->first;it--){
					if(it->second.Num>maxId){
						maxp=it;
						maxId=it->second.Num;
					}
				}
				if(it->first==Score){//�������ѭ������Ϊ it == Ac.begin() ����ֹ����itָ���Ԫ�ػ�Ҫ���� 
					if(it->second.Num>maxId){
						maxp=it;
						maxId=it->second.Num;
					}
				}
				cout<<maxp->second.Name<<' '
					<<maxp->second.Num<<' '
					<<maxp->first<<endl;
			}
			else{cout<<"Nobody"<<endl;}
		}
		else{break;}
	}
	return 0;
}

#include<bits/stdc++.h>
using namespace std;
struct Node{
	int x,y;
	Node(int _x,int _y):x(_x),y(_y){}
	Node(){}//��������� ���ܶ����ⲿ��Ա 
	
	//���������Ӵ�С С��С��  ��return��
	//�ȽϷ�ʽĬ���� operator<
	
	//friend ��Ԫ���������ã���֤����д�ṹ������Ŀ����� 
	friend bool operator<(Node a,Node b){
		if(a.x>b.x)
			return false;
		else if(a.x==b.x)
			return  a.y>b.y;
		else
			return true;
	}
	
	//С��С��/С����� ���������û������ 
	
//	bool operator<(const Node &w)const{
//		return w.x>w.x;
//	}
	//С�����/С��С�� ����˳����� Ҳû������ 
	
	
	
	//Ϊʲô����������� ���ش��ں� ���ᱨ�� 
};

//pair�ṹ�� ֻ�ܶ���������Ա 
typedef pair<int,int>C;
typedef pair<int,C>Ac;
priority_queue<Ac,vector<Ac>,greater<Ac> >Q;
int main(){
	
	//�� Q.top.first ���� ��Q.top.second ��֮�ƶ� 
	//�� Q.top.second���� ��Q.second.frist ��֮�ƶ���Q.second.second ��֮�ƶ� 
	Q.push(make_pair(0,make_pair(1,8)));
	Q.push(make_pair(7,make_pair(8,4)));
	Q.push(make_pair(6,make_pair(9,5)));
	
	while(!Q.empty()){
		Ac E=Q.top();
		printf("%d %d %d\n",E.first,E.second.first,E.second.second);
		Q.pop();
	}
	
	
	
//����Ԫ�� 

	//����Ӵ�С���� 
	priority_queue<int>R;
	const int A[]={1,5,2,4,8,6,7,3};
	for(int i=0;i<8;++i){
		R.push(A[i]);
	}
	while(!R.empty()){
		printf("%d ",R.top());
		R.pop();
	}
	puts("");
	
	//�����С���� (ע�������vector���� ��һ��Ҫ�е�)
	priority_queue<int,vector<int>,greater<int> >T;
	for(int i=0;i<8;++i){
		T.push(A[i]);
	}
	while(!T.empty()){
		printf("%d ",T.top());
		T.pop();
	}
	puts("");
	
	//����Ӵ�С 
	priority_queue<int,vector<int>,less<int> >F;
	for(int i=0;i<8;++i){
		F.push(A[i]);
	}
	while(!F.empty()){
		printf("%d ",F.top());
		F.pop();
	}
	puts("");
//���� ���������ӣ�����Ԫ�����򣬰��յ���Ԫ�����򣬵��� ���Ǵ��ھ����Եģ�
//���ǵýṹ���������Ȱ� A��Ա���� ����� A�в������� B��Ա���� .. 

	priority_queue<Node>X;
	Node a,b,c,d;
	a=Node(0,1);//ע�⹹�캯���ľ����÷� 
	X.push(a);
	b=Node(7,8);
	X.push(b);
	c=Node(6,9);
	X.push(c);
	d=Node(6,5);
	X.push(d);
	while(!X.empty()){
		printf("%d %d\n",X.top().x,X.top().y);
		X.pop();
	}
	return 0;
}

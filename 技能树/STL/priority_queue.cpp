#include<bits/stdc++.h>
using namespace std;
struct Node{
	int x,y;
	Node(int _x,int _y):x(_x),y(_y){}
	Node(){}//有这条语句 才能定义外部成员 
	
	//排序结果：从大到小 小鱼小鱼  有return！
	//比较方式默认用 operator<
	
	//friend 友元函数的作用，保证函数写结构体里面的可行性 
	friend bool operator<(Node a,Node b){
		if(a.x>b.x)
			return false;
		else if(a.x==b.x)
			return  a.y>b.y;
		else
			return true;
	}
	
	//小鱼小鱼/小鱼大鱼 倒序输出，没有排序 
	
//	bool operator<(const Node &w)const{
//		return w.x>w.x;
//	}
	//小鱼大鱼/小鱼小鱼 正常顺序输出 也没有排序 
	
	
	
	//为什么上面两条语句 重载大于号 都会报错 
};

//pair结构体 只能定义两个成员 
typedef pair<int,int>C;
typedef pair<int,C>Ac;
priority_queue<Ac,vector<Ac>,greater<Ac> >Q;
int main(){
	
	//按 Q.top.first 排序 ，Q.top.second 随之移动 
	//按 Q.top.second排序 ，Q.second.frist 随之移动，Q.second.second 随之移动 
	Q.push(make_pair(0,make_pair(1,8)));
	Q.push(make_pair(7,make_pair(8,4)));
	Q.push(make_pair(6,make_pair(9,5)));
	
	while(!Q.empty()){
		Ac E=Q.top();
		printf("%d %d %d\n",E.first,E.second.first,E.second.second);
		Q.pop();
	}
	
	
	
//单个元素 

	//结果从大到小排列 
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
	
	//结果从小到大 (注意这里的vector数组 是一定要有的)
	priority_queue<int,vector<int>,greater<int> >T;
	for(int i=0;i<8;++i){
		T.push(A[i]);
	}
	while(!T.empty()){
		printf("%d ",T.top());
		T.pop();
	}
	puts("");
	
	//结果从大到小 
	priority_queue<int,vector<int>,less<int> >F;
	for(int i=0;i<8;++i){
		F.push(A[i]);
	}
	while(!F.empty()){
		printf("%d ",F.top());
		F.pop();
	}
	puts("");
//上面 的两个例子，单个元素排序，按照单个元素排序，但是 总是存在局限性的，
//还记得结构体排序吗，先按 A成员排序 ，如果 A有并集，按 B成员排序 .. 

	priority_queue<Node>X;
	Node a,b,c,d;
	a=Node(0,1);//注意构造函数的具体用法 
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

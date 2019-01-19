#include<bits/stdc++.h>
using namespace std;
const int maxn = 50;
struct Tree{
	int Right;
	int Left;	
}Node[maxn];
int Read[maxn];
int Mid[maxn];
int BuiltTree(int La,int Ra,int Lb,int Rb){
	if(La>Ra){return 0;}
	int Rt=Read[Rb],p1,p2;
	p1=La;
	while(Mid[p1]!=Rt){p1++;}
	p2=p1-La;
	Node[Rt].Left=BuiltTree(La,p1-1,Lb,Lb+p2-1);
	Node[Rt].Right=BuiltTree(p1+1,Ra,Lb+p2,Rb-1);
	return Rt;
}
void BFSput(int Root){
	queue<int>q;
	vector<int>v;
	q.push(Root);
	while(!q.empty()){
		int w=q.front();
		q.pop();
		if(w==0){break;}
		v.push_back(w);
		if(Node[w].Left!=0){
			q.push(Node[w].Left);
		}
		if(Node[w].Right!=0){
			q.push(Node[w].Right);
		}
	}
	int L=v.size();
	for(int i=0;i<L;printf("%d%c",v[i++],i==L-1?'\n':' '));
	return;
}
int main(){
	int N;
	scanf("%d",&N);
	for(int i=0;i<N;scanf("%d",&Read[i++]));
	for(int i=0;i<N;scanf("%d",&Mid[i++]));
	
	int Root=BuiltTree(0,N-1,0,N-1);
	BFSput(Root);
	return 0;
} 
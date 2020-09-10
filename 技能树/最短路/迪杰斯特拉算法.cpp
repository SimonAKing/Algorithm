#include<bits/stdc++.h>
using namespace std;
const int INF = 0x3f3f3f3f;
int Map[200][200];
bool Vis[400];
int Dis[400];
int N,M;
void Dijkstra(){
	int Min,K;
	for(int i=1;i<=N;++i){//��ѭ�� ��������Dis���� �������ܵ�������е�ľ��� 
		Dis[i]=Map[1][i];
	}
	Vis[1]=1;
	for(int i=0;i<N;++i){//���� N���� ��ÿ���㶼Ҫ����һ�飬����˵�� �Ͻ�˹�����㷨��һ��ȱ��
						 //ΪʲôҪ����ÿ���㣿���������㣬����ȣ�ÿ���㶼��һ�£� 
		
		Min=INF;
		for(int j=1;j<=N;++j){//�ҵ���ǰû�߹�����������������̵ĵ� 
			if(Vis[j]==0 && Dis[j]<Min){
				K=j;Min=Dis[j];
			}
		}
		Vis[K]=1;//���ѭ���õ��ĵ� 
		
		//Dijkstra��Key 
		//ÿ�ν������µ�ѭ����������µ㣬�Ż���
		
		//���µ㣺�����ϲ�ѭ����֪->����ԭ��ĵ� ����û�߹�����̾���ĵ�A 
		//���²����������� ��ԭ��û��ֱ��·���������A ��·���ĵ�ľ���
		//�˾��룺�õ�������  ԭ��-> A�� ->�õ�ľ��� 
		
		//�Ż��㣺�����A�������ĵ�B �ѱ����£���ô ��ԭ�������� �����B������ C��
		//�Ż��� ԭ��-> A ->B  ԭ��-> C -> B ����������ȡ��Сֵ ����Ϊ�� B����ֵ�� 
		for(int j=1;j<=N;++j){
			if(Vis[j]==0 && Dis[j]>Dis[K]+Map[K][j]){
				Dis[j]=Dis[K]+Map[K][j];
			}
		}
	
	}
	printf("%d\n",Dis[N]);
	return;
}
int main(){
	int a,b,t;
	while(~scanf("%d %d",&N,&M) && N,M){
		memset(Map,INF,sizeof(Map));
		memset(Dis,0,sizeof(Dis));
		memset(Vis,0,sizeof(Vis));
		for(int i=0;i<M;++i){
			scanf("%d %d %d",&a,&b,&t);
			Map[a][b]=Map[b][a]=t; 
		}
		Dijkstra();
	}
	return 0;	
}

/*
6 9
1 2 6
1 3 3
2 3 2
2 4 5
3 4 3
4 5 2
3 5 4
5 6 5
4 6 3
*/
#include <cstdio>
#include <set>
#include <cstring>
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 1e5+10;
int n;
int tot, head[N], to[N<<1], nex[N<<1], len[N<<1]; 
int f[N], dis[N], dep[N];

void init()
{
	tot = 0;
	for(int i = 0; i <= n; ++ i)
	{
		head[i] = -1;
	}
}

void addEdge(int x, int y, int l)
{
	to[tot] = y;
	len[tot] = l;
	nex[tot] = head[x];
	head[x] = tot++;
}

void dfs(int u, int d)
{
	dep[u] = d;
	for(int i = head[u]; ~i; i = nex[i])
	{
		int v = to[i];
		if(v == f[u]) continue;
		dis[v] = len[i];
		f[v] = u;
		dfs(v, d+1);
	}
}

bool solve(int x, int y)
{
	vector<int> vec;
	while(vec.size() < 50 && x != y)
	{
		if(dep[x] < dep[y])
		{
			vec.push_back(dis[y]);
			y = f[y];
		}
		else
		{
			vec.push_back(dis[x]);
			x = f[x];
		}
	}
	if(vec.size()>=50) return true;
	sort(vec.begin(), vec.end());
	for(int i = 0; i + 2 < vec.size(); ++ i)
	{
		if(vec[i] + vec[i+1] > vec[i+2]) return true;
	}
	return false;
}

int main()
{
	int T;
	scanf("%d", &T);
	while(T--)
	{
		scanf("%d", &n);
		init();
		for(int i = 1; i < n; ++ i)
		{
			int x, y, l;
			scanf("%d%d%d", &x, &y, &l);
			addEdge(x, y, l);
			addEdge(y, x, l);
		}
		dfs(1, 0);
		int m;
		scanf("%d", &m);
		for(int i = 0; i < m; ++ i)
		{
			int x, y;
			scanf("%d%d", &x, &y);
			puts(solve(x, y) ? "Yes" : "No");
		}
	}
	return 0;
} 

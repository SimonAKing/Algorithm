#include<iostream>
#include<cstring>

using namespace std;

bool visited[505];
int edge[505][505];
int n,m,k;

void dfs(int pos)
{
    visited[pos]=true;
    for(int i = 0; i < n; i++)
    {
        if(visited[i]==false && edge[pos][i])
            dfs(i);
    }
}
int all()
{
    int con=0;
    for(int i = 0; i < n; i++)
    {
        if(visited[i]==false)
            dfs(i),con++;
    }
    return con;
}
int main()
{
    int from,to;
    cin>>n>>m;
    memset(edge,0,sizeof(edge));
    for(int i = 0; i < m; i++)
    {
        cin>>from>>to;
        edge[from][to]=1;
        edge[to][from]=1;
    }
    int con = all();
    cin>>k;
    int city,temp;
    for(int j = 1; j <= k; j++)
    {
        cin>>city;
        for(int i = 0; i < n; i++)
        {
            if(edge[city][i])
                edge[city][i]=0,edge[i][city]=0;
        }
        memset(visited,false,sizeof(visited));
        temp = all();
        if(temp>con+1)
            cout<<"Red Alert: City "<<city<<" is lost!"<<endl;
        else
            cout<<"City "<<city<<" is lost."<<endl;
        con=temp;
    }
    if(k==n)
        cout<<"Game Over."<<endl;
    return 0;
}
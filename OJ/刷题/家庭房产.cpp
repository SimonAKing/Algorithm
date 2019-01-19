#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
struct node
{
    int id;
    int cnt;
    int s;
};
node pe[1010];
int par[10010];
int dis[10010];
int vis[10010];
struct fam
{
    int id;
    int num;
    int cnt;
    int s;
    double avgs;
    double avgcnt;
};
fam inf[10005];
bool cmp(const fam& a,const fam & b)
{
    if(a.avgs==b.avgs)
        return a.id<b.id;
    return a.avgs/b.avgs>=1.0;
}
void init()
{
    for(int i = 0 ; i  <= 9999 ; i ++)
    {
        par[i]      = i;
        inf[i].id   = 0;
        inf[i].cnt  = 0;
        inf[i].num  = 0;
        inf[i].s    = 0;
        vis[i]      = 0;
        inf[i].avgs = 0;
    }

}
int findpar(int x)
{
    if(par[x]==x)
        return x;
    else
        return par[x] = findpar(par[x]);
}
void unite(int a,int b)
{
    a = findpar(a);
    b = findpar(b);
    if(a==b)
        return ;
    par[b] = a;
}
int main()
{
    int n;
    cin >> n ;
    int a,b,c;
    init();
    for(int i = 0 ; i < n ; i++)
    {
        scanf("%d%d%d",&a,&b,&c);
        vis[a] = 1;
        if(b!=-1)
        {
            unite(a,b);
            vis[b] =1;
        }
        if(c!=-1)
        {
            unite(a,c);
            vis[c] = 1;
        }
        int k,d;
        scanf("%d",&k);
        for(int j = 0 ; j < k ; j++)
        {
            scanf("%d",&d);
            unite(a,d);
            vis[d] = 1;
        }
        pe[i].id = a;
        scanf("%d%d",&pe[i].cnt,&pe[i].s);
    }
    for(int i = 0 ; i < n ; i ++)
    {
        int id = pe[i].id;
        id = findpar(id);
        inf[id].s+=pe[i].s;
        inf[id].cnt+=pe[i].cnt;
    }
    for(int i = 0 ; i <= 9999 ; i ++)
    {
        if(vis[i])
        {
            par[i] = findpar(i);
            if(!inf[par[i]].num)
            {
                inf[par[i]].id = i;
            }
            inf[par[i]].num++;
            inf[par[i]].avgs = inf[par[i]].s*1.0/inf[par[i]].num;
            inf[par[i]].avgcnt = inf[par[i]].cnt*1.0/inf[par[i]].num;
        }
    }
    sort(inf,inf+10000,cmp);
    int ans = 0;
    for(int i = 0 ; i < n ; i ++)
    {
        if(inf[i].num)
        ans++;
        else
            break;
    }
    cout << ans <<endl;
    for(int i = 0 ; i < ans ; i ++)
    {
        printf("%04d %d %.3f %.3f\n",inf[i].id,inf[i].num,inf[i].avgcnt,inf[i].avgs);
    }
    return 0 ;
}



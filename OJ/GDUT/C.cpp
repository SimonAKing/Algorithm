#include <iostream>
#include <cstdio>
#include <cstring>
#include <cstdlib>

using namespace std;

const int mod = 10007;
const int N = 51;
int f[N];


void solve()
{
    f[0] = 1;
    for(int i = 1; i < N; ++ i)
    {
        f[i] = f[i-1];
        if(i > 1) f[i] += f[i-2];
        if(i > 2) f[i] += f[i-3];
        f[i] %= mod;
    }
    int n;
    scanf("%d", &n);
    int ans = 1;
    for(int i = 1; i < n; ++ i)
    {
        int x;
        scanf("%d", &x);
        ans = ans*f[x]%mod;
    }
    printf("%d\n", ans);
}

int main()
{
    int T;
    scanf("%d", &T);
    while(T--)
    {
        solve();
    }
    return 0;
}

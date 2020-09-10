#include <iostream>
#include <cstdio>
#include <algorithm>

using namespace std;

typedef long long ll;

const int maxn = 1e5 + 5;

int a[maxn];

int main()
{
    int T;
    scanf("%d", &T);
    while(T--)
    {
        int n;
        scanf("%d", &n);
        for(int i = 0; i < n; ++i) scanf("%d", &a[i]);
        sort(a, a + n);
        ll ans = 0;
        for(int i = 0; i < n && ans + 1 >= a[i]; ++i) ans += a[i];
        printf("%lld\n", ans);
    }
    return 0;
}

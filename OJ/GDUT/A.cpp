#include <iostream>
#include <cstdio>
#include <algorithm>
#include <cstdlib>
using namespace std;

const int NUM = 1000;

void solve()
{
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    int ans = a/2+b-c/4;
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

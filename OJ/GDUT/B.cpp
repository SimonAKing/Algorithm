#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
    int T;
    scanf("%d", &T);
    while(T--)
    {
        int x1, y1, x2, y2, n;
        scanf("%d%d%d%d%d", &n, &x1, &y1, &x2, &y2);
        int tot = abs(x1-x2) + abs(y1-y2);
        int ans = -1;
        if((n+1)/2 >= tot)
        {
            if(tot&1)
            {
                if(n&1) ans = 2;
            }
            else ans = 1;
        }
        else if(n&1) ans = 1;
        printf("%d\n", ans);
    }
    return 0;
}

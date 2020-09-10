#include <bits/stdc++.h>

class Koz {
public:
    int disintegration(int A, int B, int C) {
        return A * B + A / 10 / 3 * C;
    }
};

int main()
{
    Koz koz;
    int T;
    scanf("%d", &T);
    while( T-- ) {
        int A, B, C;
        std::cin >> A >> B >> C;
        std::cout << koz.disintegration(A, B, C) << std::endl;
    }
    return 0;
}

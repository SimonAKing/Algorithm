#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef double dd;
typedef long double ld;

#define Vi vector<int>
#define VI Vi::iterator
#define Mi map<int, int>
#define MI Mi::iterator
#define Si set<int>
#define SI Si::iterator

#define For(i,a) for(int i = 0; i < a; ++i)
#define Rof(i,a) for(int i = a-1; i > 0; --i)
#define Fur(i,a,b) for(int i = a; i <= b; ++i)
#define Fdr(i,a,b) for(int i = a; i >= b; i--)

#define Me(a) memset(a,0,sizeof(a))

#define pp    printf("\n")
#define ps    printf(" ")

#define sc(c) scanf("%c", &c)
#define ss(s) scanf("%s",s);
#define sf(s) scanf("%lf",&s);

#define pd(x) printf("%d", x)
#define pdd(x) printf("%d\n", x)
#define pdp(x) printf("%d ", x)

#define pc(x) printf("%c", x)
#define pcc(x) printf("%c\n", x)
#define pcp(x) printf("%c ", x)

#define ps(x) printf("%s", x)
#define pss(x) printf("%s\n", x)
#define psp(x) printf("%s ", x)

#define pl(x) printf("%lld", x)
#define pll(x) printf("%lld\n", x)
#define plp(x) printf("%lld ", x)

#define pf(x) printf("%lf", x)
#define pff(x) printf("%lf\n", x)
#define pfp(x) printf("%lf ", x)

const  int maxn = 1e5;
const  dd eps = 1e-9;
const  ll INF = 0x3f3f3f3f3f3f3f3f;
const  ll MOD = 1000000007;
const  ld PI = 3.1415926535897932384626433832795028841;

inline int in()
{
    char ch=getchar();int x=0,f=1;
    while(ch<'0'||ch>'9'){if(ch=='-')f=-1;ch=getchar();}
    while('0'<=ch&&ch<='9'){x=(x<<1)+(x<<3)+(ch^48);ch=getchar();}
    return x*f;
}

inline ll llin()
{
    char ch=getchar();ll x=0,f=1;
    while(ch<'0'||ch>'9'){if(ch=='-')f=-1;ch=getchar();}
    while('0'<=ch&&ch<='9'){x=(x<<1)+(x<<3)+(ch^48);ch=getchar();}
    return x*f;
}

template<class T> T gcd(T a, T b){if(!b)return a;return gcd(b,a%b);}
template<class T> T pow(T a, T b){T res(1);while(b){if(b&1)res=res*a;a=a*a;b>>=1;}return res;}
template<class T> T powm(T a, T b, T mod){T res(1);while(b){if(b&1)res=res*a%mod;a=a*a%mod;b>>=1;}return res;}

//ACACACACACACACACACACACACACCACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACACAC

int main(){
    /*
    #ifndef ONLINE_JUDGE
    freopen("C:\\Users\\ASUS\\Desktop\\Input.txt","r",stdin);
    #endif
    */
    int n,m;
    n=in();m=in();
    pdd(n+m);
    return 0;
}


#include "stdio.h"
#include "math.h"
int main(void)
{
    int  n,m,j,i;
    while(~scanf("%d%d",&n,&m))
    {   
        for(j=sqrt(2*m);j>=1;j--)
        {
            i=m/j+(1-j)/2;
            if((2*i+j-1)*j/2==m&&i+j-1<=n)
                printf("[%d,%d]\n",i,i+j-1);
        }
    }
    return 0;
}

#include "stdio.h"
#include "math.h"
int main(void)
{
	double a,b,c,d;
	while(~scanf("%lf%lf%lf%lf",&a,&b,&c,&d))
	{
		printf("%.2lf\n",sqrt(pow(a-c,2)+pow(b-d,2)));
	}
	return 0;
}

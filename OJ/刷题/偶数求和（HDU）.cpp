#include<stdio.h>
int main(void)
{
	int i,m,n,o,sum,flag;
	while(~scanf("%d%d",&n,&m))//3  2
	{
		sum=o=flag=0;
		for(i=0;i<n;i++)//i=0;i<3;(1)       i=1;i<3  i=2;i<3 i=3;i<3
		{
			o++;//o=1   o=2   o=1
			sum+=2*(i+1);//sum=2  sum=2+4=6  sum=6
			if(o==m)  //o==m
			{
				if(flag) //第一次不执行 
				   printf(" ");
				printf("%d",sum/m);//6/2==3
				sum=o=0;
				flag=1;
			}	
		}
		if(sum!=0)  printf(" %d",sum/o);//最后剩的数之和  除以  最后的个数 
		                                //6/1  if(sum==0) 说明 n正好是m 的倍数 \
                     (也可以把sum！=0   换成n%m!=0）                         //否则 说明 n不是m的倍数，n%m！=0  
		printf("\n");                                               //而此时的sum刚好就是那个余数的转换之和

	}
	return 0;
}


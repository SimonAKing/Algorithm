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
				if(flag) //��һ�β�ִ�� 
				   printf(" ");
				printf("%d",sum/m);//6/2==3
				sum=o=0;
				flag=1;
			}	
		}
		if(sum!=0)  printf(" %d",sum/o);//���ʣ����֮��  ����  ���ĸ��� 
		                                //6/1  if(sum==0) ˵�� n������m �ı��� \
                     (Ҳ���԰�sum��=0   ����n%m!=0��                         //���� ˵�� n����m�ı�����n%m��=0  
		printf("\n");                                               //����ʱ��sum�պþ����Ǹ�������ת��֮��

	}
	return 0;
}


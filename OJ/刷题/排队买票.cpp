#include "stdio.h"
int main(void)
{  
    int m,n,k;
	while(~scanf("%d%d%d",&m,&n,&k))
	{
		 if(n<k)  
        printf("0\n"); //2ԪС���ѱ�1ԪС���Ѷ�   
    else
	{  
        int g,j,i;
	    int s1,s2;  
	    s1=s2=1;
        for(int i=1;i<=k;++i) //2Ԫ��С�����ڲ�ȫ����   
           s1*=i;    
        for(int i=1;i<=n;++i) //1Ԫ��С�����ڲ�ȫ����   
            s2*=i;  
        int s[20][20]={0};  
        s[1][0]=1;  
        s[1][1]=1;  
        for(i=2;i<=n;++i){  
            for(j=0;j<=i;++j){  
                for(g=0;g<=j;++g){  
                    s[i][j]+=s[i-1][g];}}} //��i��1ԪС���Ѻ�j��2ԪС������ɵĶ����ŷ�   
        printf("%d\n",s[n][k]*s2*s1);  
	}  
}
    return 0;  
}  


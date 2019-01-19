#include "stdio.h"
int main(void)
{  
    int m,n,k;
	while(~scanf("%d%d%d",&m,&n,&k))
	{
		 if(n<k)  
        printf("0\n"); //2元小朋友比1元小朋友多   
    else
	{  
        int g,j,i;
	    int s1,s2;  
	    s1=s2=1;
        for(int i=1;i<=k;++i) //2元的小朋友内部全排列   
           s1*=i;    
        for(int i=1;i<=n;++i) //1元的小朋友内部全排列   
            s2*=i;  
        int s[20][20]={0};  
        s[1][0]=1;  
        s[1][1]=1;  
        for(i=2;i<=n;++i){  
            for(j=0;j<=i;++j){  
                for(g=0;g<=j;++g){  
                    s[i][j]+=s[i-1][g];}}} //由i个1元小朋友和j个2元小朋友组成的队伍排法   
        printf("%d\n",s[n][k]*s2*s1);  
	}  
}
    return 0;  
}  


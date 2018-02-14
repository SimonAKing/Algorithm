#include "stdio.h"
#include "string.h"
#include "math.h"
int main()
 {

         int t;
         char s[100];
         scanf("%d%*c",&t);
         while(t--)
         {
         	gets(s);
       	int j=strlen(s);
         int a=0;
         int b=0;
         for(int i=0;i<j;i++)
         {
                 if(s[i]>='A'&&s[i]<='F')b=s[i]-'A'+10;
                 if(s[i]>='0'&&s[i]<='9')b=s[i]-'0';
                 a = a+b*(pow(16,(j-i-1)));
         }
         printf("%d\n",a);
         }
 }

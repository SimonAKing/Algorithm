#include <stdio.h>  
int main()  
{  
    int t, n; 
	char s[20]; 
    int x,y,z,face,left,ver,temp,d;   
    scanf("%d",&t);  
    while (t--)  
    {  
        scanf("%d",&n);  
        x=y=z=0;  
        face=0,left=4,ver=2;  
        while (n--)  
        {  
            scanf("%s %d",s,&d); 
			switch(s[0])
			{
				case 'b':face=(face+3)%6,left=(left+3)%6;break;
				case 'l':temp=face,face=left,left=(temp+3)%6;break;
				case 'r':temp=left,left=face,face=(temp+3)%6;break;
				case 'u':temp=face,face=ver,ver=(temp+3)%6;break;
				case 'd':temp=ver,ver=face,face=(temp+3)%6;break; 
			} 
            switch(face)
            {
            	case 0:x+=d;break;
            	case 1:y+=d;break;
            	case 2:z+=d;break;
            	case 3:x-=d;break;
            	case 4:y-=d;break;
            	case 5:z-=d;break;
			}
        }  
        printf("%d %d %d %d\n", x, y, z, face);  
    }  
    return 0;  
}



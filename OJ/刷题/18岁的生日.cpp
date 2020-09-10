#include <stdio.h>
bool year(int y){
	if((y%400==0)||(y%100!=0&&y%4==0))
	  return true;
    else
      return false;
}
int main(){
	int t,i,y,m,d,sum;
	scanf("%d",&t);
	while(t--){
		scanf("%d-%d-%d",&y,&m,&d );
		if(year(!y)&&m==2&&d==29){
			printf("-1\n");
			continue;
		}
	    sum=365*18;
	    if(m>=3){
   		   for(i=1;i<=18;i++){
   		   	  if(year(y+i))
 	   		      sum++;  	
   		   }
    	}
    	else{
	    	for(i=0;i<18;i++){
	    		if(year(y+i))
		    		sum++;
	    	}
	    }
        printf("%d\n",sum);
	}
	return 0;
}

#include<stdio.h>
int main(){
	int N;
	int a,b;
	while(~scanf("%d\n",&N)){
		while(N--){
			scanf("%d",&a);
			scanf("%d",&b);
			int res = a-b > 0 ? a-b : b-a;
			printf("%d\n",res);
		}
	}
	return 0;
}


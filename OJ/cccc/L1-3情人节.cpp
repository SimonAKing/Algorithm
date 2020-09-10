#include<bits/stdc++.h>
using namespace std;
int main(){
	int i=0;
	char Val[11],a2[11],a14[11];
	while(scanf("%s",Val) && Val[0]!='.'){
		i++;
		if(i==2){strcpy(a2,Val);}
		if(i==14){strcpy(a14,Val);}
	}
	if(i>=14){printf("%s and %s are inviting you to dinner...\n",a2,a14);}
	else if(i>=2){printf("%s is the only one for you...\n",a2);}
	else{printf("Momo... No one is for you ...\n");}
	return 0;
}
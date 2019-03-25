#include<stdio.h>

#define maxSize 128

void map(int hash[],char *ch){
	for(int i=0;ch[i]!='\0';hash[ch[i++]]++);
}

void main(){
	char a[] = "abcdef";
	char *b;
	gets(b);

	int hash[maxSize] = {0};
	int index = 0;

	map(hash,a);
	map(hash,b);

	for(int i=0;i<maxSize;++i){
		if(!hash[i]){
			continue;
		}
		for(int j=0;i<hash[i];++j){
			a[index+j] = i;
		}
		index += hash[i];
	}
	puts(a);
}


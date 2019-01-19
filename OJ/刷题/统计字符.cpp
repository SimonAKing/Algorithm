//输入两个字符串，判断第二个字符串中 有多少 属于第一个字符串的字符，输出字符以及对应次数。
//这个应该叫做哈希表的映射吧。。
//把第二个字符串所有的字符全部映射在 整型数组，然后再遍历第一个字符串，进行对应输出。 
#include <stdio.h>
int main(){
	char s[100];
	char a[15];
	while(gets(a) && a[0]!='#'){
	int Hash[300]={0};
	gets(s);
	for(int i=0;s[i]!='\0';i++)
		Hash[s[i]]++;
	for(int i=0;a[i]!='\0';i++)
	    printf("%c %d\n",a[i],Hash[a[i]]);
	}
    return 0;
} 

//2017年2月5日23:20:31
//这题 WA了两发，是因为， for循环中的判断条件 写成了，i<strlen（s） ，这样 每次循环都会 调用len函数
//所以 应该先定义 一个变量等于strlen(s) 然后用常量作为循环条件 
//要谨记这个教训！ 

//网上代码 
#include <stdio.h>
#include <string.h>
#define maxn 100000
char s[maxn];
char f[]="Bulbbasaur";
int main()
{
	int n[100]={0};
	scanf("%s",s);
	for(int i=0;s[i]!='\0';i++)
	    n[s[i]-'0']++;
	n['a'-'0']/=2;
	n['u'-'0']/=2;
	int num=n[f[0]-'0'];//不难看出下面的 for循环 很聪明，牢牢地把判断范围 锁在其关键字上面。 
	for(int i=1;i<strlen(f);i++)
		if(n[f[i]-'0']<num)
			num=n[f[i]-'0'];
	printf("%d\n",num);
	return 0;
}

//自己代码 
#include <stdio.h>
#include <string.h>
#define maxn 100001
char s[maxn];
int main()
{
	int n[8]={0};
	scanf("%s",s);
	for(int i=0;s[i]!='\0';i++){
		if(s[i]=='B'){
			n[1]++;
		}
		if(s[i]=='u'){
			n[2]++;
		}
		if(s[i]=='l'){
			n[3]++;
		}
		if(s[i]=='b'){
			n[4]++;
		}
		if(s[i]=='a'){
			n[5]++;
		}
		if(s[i]=='s'){
			n[6]++;
		}
		if(s[i]=='r'){
			n[7]++;
		}
	}
	n[2]/=2;
	n[5]/=2;
	int num=maxn;
	for(int i=1;i<=7;i++){
		if(n[i]<num){
			num=n[i];
		}
	}
	printf("%d\n",num);
	return 0;
}


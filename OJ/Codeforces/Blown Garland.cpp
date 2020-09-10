//虽然一次AC，但还是忍不住说，大水题！
//题意：给4个字母，4个为一周期，判断在对应的字母中 存在多少个感叹号。
//没什么好说的，我服这水题，提交的时候不小心，在每个输出的结果后面都加了个换行符，也是AC了。。
//还花费大量时间来思考 字符串长度为 4 的情况。。。 
#include <stdio.h>
char s[103];
struct MJ
{ 
	int num;
	char ch;
}stu[103];
void Mj(int n,char s[],int i){
	if(s[i]=='!')
	    stu[n].num++;
    else
        stu[n].ch=s[i];
    
}
void Ll(char chh){
	for(int i=0;i<=3;i++){
		if(stu[i].ch==chh)
            printf("%d ",stu[i].num); 
	}
}
int main(){
	scanf("%s",s);
	for(int i=0;s[i]!='\0';i++)
		Mj(i%4,s,i);
	Ll('R');Ll('B');Ll('Y');Ll('G');
	printf("\n");
	return 0;
} 

//2017��2��5��23:20:31
//���� WA������������Ϊ�� forѭ���е��ж����� д���ˣ�i<strlen��s�� ������ ÿ��ѭ������ ����len����
//���� Ӧ���ȶ��� һ����������strlen(s) Ȼ���ó�����Ϊѭ������ 
//Ҫ���������ѵ�� 

//���ϴ��� 
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
	int num=n[f[0]-'0'];//���ѿ�������� forѭ�� �ܴ��������εذ��жϷ�Χ ������ؼ������档 
	for(int i=1;i<strlen(f);i++)
		if(n[f[i]-'0']<num)
			num=n[f[i]-'0'];
	printf("%d\n",num);
	return 0;
}

//�Լ����� 
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


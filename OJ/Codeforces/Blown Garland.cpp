//��Ȼһ��AC���������̲�ס˵����ˮ�⣡
//���⣺��4����ĸ��4��Ϊһ���ڣ��ж��ڶ�Ӧ����ĸ�� ���ڶ��ٸ���̾�š�
//ûʲô��˵�ģ��ҷ���ˮ�⣬�ύ��ʱ��С�ģ���ÿ������Ľ�����涼���˸����з���Ҳ��AC�ˡ���
//�����Ѵ���ʱ����˼�� �ַ�������Ϊ 4 ����������� 
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

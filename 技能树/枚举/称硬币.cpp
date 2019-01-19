//POJ-1013
//����˼·--��쿣��Լ����ӱ���û��ʵ���������쿽��ڴ��� Ҳ����ĥ���� �����ס�ʧ�䣬����� 
//���� ÿһöӲ�� �ȼ��� ������ģ������� �Ƿ���ϳ��������
//������ϣ�����������������ϣ��ͼ��� �����صģ����Ƿ���ϳ��������
//������Ӳ�Ҷ���һ�飬һ�����ҵ�����Ӳ�ҡ� 
#include <stdio.h>
#include <string.h>

char Left[3][7];
char Right[3][7];
char Result[3][7];
bool IsFake(char,bool);

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        for(int i=0;i<3;++i)
            scanf("%s %s %s",Left[i],Right[i],Result[i]);
        for(char c='A';c<='L';++c){
            if(IsFake(c,true)){//����Ӳ������� 
                printf("%c is the counterfeit coin and it is light.\n",c);
                break;
            }  
            else if(IsFake(c,false)){//����Ӳ�����ص� 
                printf("%c is the counterfeit coin and it is heavy.\n",c);
                break;
            }
        }
    }
    return 0;
} 

bool IsFake(char c,bool light){
    for(int i=0;i<3;++i){
        //��� light Ϊ true����Ӳ��Ϊ��Ӳ�ң�pLeft����Left[i]�ĵ�ַ��pRight����Right[i]�ĵ�ַ 
        //��� light Ϊ false����Ӳ��Ϊ��Ӳ�� ��pLeft����Right[i]�ĵ�ַ��pRight����Left[i]�ĵ�ַ 
        char *pLeft,*pRight;
        pLeft=light?Left[i]:Right[i]; 
        pRight=light?Right[i]:Left[i];
        //�������ַ�ָ������ã�ʱ��ָ�� ��ƽ������Ҷ� ���� ��ƽ�Ҷ������ �Ա�����һ���������ܾ���
         
        switch(Result[i][0]){
            
            case 'u'://�Ҷ��ϸ� ˵�����Ҷ�����Ӳ�� ���� �������Ӳ�� 
                if(strchr(pRight,c)==NULL)//����Ҷ� ����Ӳ�� ���� ��� ����Ӳ�ң����Ҷ� �ϸ� 
                    return false;//˵�� ��Ӳ�Ҳ�������Ӳ�� 
                break;
                
            case 'e'://����ƽ�� ˵�������˶���Ӧ�ô��� ����Ӳ�� 
                if(strchr(pLeft,c) || strchr(pRight,c))//������� ��һ���и�Ӳ�ң���û��������״�� 
                    return false;//˵�� ��Ӳ�Ҳ�������Ӳ�� 
                break;
                
            case 'd'://�Ҷ��³� ˵�����������Ӳ�� �����Ҷ�����Ӳ�� 
                if(strchr(pLeft,c)==NULL)//������ ����Ӳ�� ���� �Ҷ� ����Ӳ�ң����Ҷ� �³� 
                    return false;//˵����Ӳ�Ҳ�������Ӳ�� 
                break;
        } 
    }
    return true;
}

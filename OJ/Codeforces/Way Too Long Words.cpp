/*
2017��3��1��14:28:48
���ò�˵����ˮ��
�����ַ�����������ȴ���10�������һ���ַ� �� �ַ����ȼ� 2 �� ���һ���ַ�
���� ֱ������ַ�
���У���ˮ�� ���� 
*/
#include <iostream>
#include <cstdio>
#include <cstring>
using namespace std;
int main(){
    int n;
    char A[110];
    scanf("%d",&n);
    while(n--){
        scanf("%s",A);
        int len=strlen(A);
        if(len<=10)
            printf("%s\n",A);
        else
            printf("%c%d%c\n",A[0],len-2,A[len-1]);
    }
    return 0;
}

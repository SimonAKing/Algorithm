/*
2017��3��1��14:19:36 (�������ĺ�ɵ��)
����������ж��Ƿ���� �ֳ�����ż��
����˼·����������� ������ֱ�����NO
�ӵ㣺��ô�� ������ 2 ���ͻ��� һ�� 2 �� һ�� 0����ȫ����(��ϸ��) 
����˵ ����һ��Ҫϸ�ģ�һ��Ҫ�����ٽ�ֵ������ֵ 
*/
#include <iostream> 
#include <cstdio>
using namespace std;
int main(){
    int n,m=0;
    scanf("%d",&n);
    if(n&1 || n==2){
        printf("NO\n");
        return 0;
    }
    printf("YES\n");
    return 0;
}

/*
2017��2��28��22:17:33 
���⣺����һ�������ҳ����� �Ƿ������������
����˼·���ȶ�����������򣬶�������������һ��Ϊ��̵ĳ��ȣ�һ��Ϊ�еȳ��ȣ�һ��Ϊ��ĳ���
Ȼ������жϣ�����֮��С�ڵ����ߣ�����֮����ڵ�����
���Ͼ�ֱ�����YES return ѭ�������û���أ������������NO 
*/ 
#include <stdio.h>
#include <algorithm>
using namespace std;
#define maxn 100010
int num[maxn];
int main(){
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
        scanf("%d",num+i);
    sort(num,num+n);
    int j,l;
    for(int i=0;i<n-2;i++){
        j=i+1;
        l=j+1;
        if(num[i]+num[j]>num[j] && num[l]-num[j]<num[i] ){
            printf("YES\n");
            return 0;
        }
    }
    printf("NO\n");
    return 0;
} 

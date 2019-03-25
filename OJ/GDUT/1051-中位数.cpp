#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;

const int Max = 1e5 + 1;

int N;
int Arr[Max];

int main(){
  while(~scanf("%d",&N)){

    memset(Arr,0,sizeof(Arr));

    for(int i=0;i<N;scanf("%d",&Arr[i++]));
    
    sort(Arr,Arr+N);

    printf("%d\n", N % 2 ? Arr[N/2]:Arr[N/2]-1);
  }

  return 0;  
}
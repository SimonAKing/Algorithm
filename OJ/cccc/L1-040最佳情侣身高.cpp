#include<bits/stdc++.h>
using namespace std;
int main(){
	int T;
	char Sex;
	double High;
	scanf("%d%*c",&T);
	while(T--){
		scanf("%c%lf%*c",&Sex,&High);
		Sex=='M'?printf("%.2lf\n",High/1.09):printf("%.2lf\n",High*1.09);
	}
	return 0;
}
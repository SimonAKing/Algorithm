#include<bits/stdc++.h>
using namespace std;
int main() {
	int T;
	scanf("%d",&T);
	while(T--){
		double F,W;
		scanf("%lf %lf",&F,&W);
		double C=(F - 100)*1.8;
		if(abs(C-W)<C * 0.1) {
			cout << "You are wan mei!" << endl;
		} else if(C > W) {
			cout << "You are tai shou le!" << endl;
		} else {
			cout << "You are tai pang le!" << endl;
		}
	}
	return 0;
}

������С��

Ac.resize(num) ������ָ������

Ac.reserve()   : �����ʵ�����

�Ƚ���һ�� Ac.resize(num)

Eg:

#include<bits/stdc++.h>
using namespace std;
vector<int>Ac;
int main(){
    for(int i=1;i<=10;++i){
        Ac.push_back(i);
    }
    Ac.resize(5);
    Ac.resize(8,100);
    Ac.resize(12);


    vector<int>::iterator it;
    for(it=Ac.begin();it!=Ac.end();++it){
        cout<<*it<<' ';
    }
    cout<<endl;

    return 0;
}

Output��1 2 3 4 5 100 100 100 0 0 0 0
/*
map���壺Map��STL��һ���������������ṩһ��һ�����е�һ�����Գ�Ϊ�ؼ��֣�ÿ���ؼ���ֻ����map�г���һ�Σ��ڶ������ܳ�Ϊ�ùؼ��ֵ�ֵ�������ݴ��������������������
         map�ڲ���ʵ���Խ�һ�ź����(һ�ַ��ϸ������ϵ�ƽ�������)����������ж������Զ�����Ĺ��ܡ�

ʲô��һ��һ������ӳ�䣺
                        ����һ���༶�У�ÿ��ѧ����ѧ�Ÿ����������ʹ�����һһӳ��Ĺ�ϵ�����ģ����map��������������
                        ������ѧ����int�������������ַ�������

map������:���ȸ���first�������first��ͬ ������˳������������ظ���first ����ɾ��
          ������Ҫע����ǣ��ַ��ͱ��� ������ �������ͱ��� ������ ��һ�£����ǵ�strcmp������

Ҳ���Զ�map��ʼ������ס pair���൱�ڽṹ�壬����ĳ�Ա���� map<��Ա1����Ա2> ���ݳ�Ա 1���ҵ� ��Ա2

���鷽ʽ��map���б���ʱ��Ҫע�� �±�ֵ ҪΪ��������

*/
/*#include<bits/stdc++.h>
using namespace std;

int main(){
    int Val;string S;
    map<int,string>A;
    for(int i=0;i<3;++i){
        cin>>Val>>S;
        A.insert(pair<int,string>(Val,S));
    }
    map<int,string>::iterator it;
    for(it=A.begin();it!=A.end();++it){
        cout<< it->first << ' ' << it->second <<endl;
    }
    return 0;
}*/

#include<bits/stdc++.h>
using namespace std;

int main(){
    int Val;string S;
    map<int,string>A;
    /*for(int i=0;i<3;++i){
        cin>>Val>>S;
        A.insert(pair<int,string>(Val,S));
    }*/
    /*map<string,string>::iterator it;
    for(it=A.begin();it!=A.end();++it){
        cout<< it->first << ' ' << it->second <<endl;
    }*/
    A[1] = "Love";
    A[2] = "Algorithm";
    /*int Len = A.size();
    for(int i=1;i<=Len;++i){
        cout<<A[i]<<endl;
    }*/
    /*A["a"]=1;
    A["b"]=2*/
    //���Һ��� find 
    map<int,string>::iterator it;
    it=A.find(1);
    if(it==A.end()){cout<<"Not found"<<endl;}
    else{cout<< it->first <<' '<< it->second <<endl;}
    return 0;
}


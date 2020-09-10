/*
map定义：Map是STL的一个关联容器，它提供一对一（其中第一个可以称为关键字，每个关键字只能在map中出现一次，第二个可能称为该关键字的值）的数据处理能力，由于这个特性
         map内部的实现自建一颗红黑树(一种非严格意义上的平衡二叉树)，这颗树具有对数据自动排序的功能。

什么是一对一的数据映射：
                        比如一个班级中，每个学生的学号跟他的姓名就存在着一一映射的关系，这个模型用map可能轻易描述，
                        很明显学号用int描述，姓名用字符串描述

map的特性:首先根据first排序，如果first相同 则按输入顺序排序，如果有重复的first 将被删除
          并且需要注意的是：字符型变量 的排序 与整数型变量 的排序 不一致，还记得strcmp函数嘛

也可以对map初始化，记住 pair就相当于结构体，里面的成员便是 map<成员1，成员2> 根据成员 1来找到 成员2

数组方式对map进行遍历时，要注意 下标值 要为整数类型

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
    //查找函数 find 
    map<int,string>::iterator it;
    it=A.find(1);
    if(it==A.end()){cout<<"Not found"<<endl;}
    else{cout<< it->first <<' '<< it->second <<endl;}
    return 0;
}


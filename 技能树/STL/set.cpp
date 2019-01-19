/*
set特性:删除重复元素，并排序

注意：对于set不能用数组下标值的办法进行操作，所以对于位置的操作办法如下：

lower_bound()返回一个 iterator 它指向在[first,last)标记的有序序列中可以插入value，
而不会破坏容器顺序的第一个位置，而这个位置标记了一个大于等于value 的值。　
　
例如，有如下序列：　　ia[]={12,15,17,19,20,22,23,26,29,35,40,51};
用值21调用lower_bound(),返回一个指向22的iterator。用值22调用lower_bound(),也返回一个指向22的iterator。
iterator upper_bound( const key_type &key ):返回一个迭代器，指向键值> key的第一个元素。
函数lower_bound()在first和last中的前闭后开区间进行二分查找，返回大于或等于val的第一个元素位置。
如果所有元素都小于val，则返回last的位置

举例如下：
一个数组number序列为：4,10,11,30,69,70,96,100.设要插入数字3,9,111.pos为要插入的位置的下标
则
pos = lower_bound( number, number + 8, 3) - number，pos = 0.即number数组的下标为0的位置。
pos = lower_bound( number, number + 8, 9) - number， pos = 1，即number数组的下标为1的位置（即10所在的位置）。
pos = lower_bound( number, number + 8, 111) - number， pos = 8，即number数组的下标为8的位置
（但下标上限为7，所以返回最后一个元素的下一个元素）。
所以，要记住：函数lower_bound()在first和last中的前闭后开区间进行二分查找，返回大于或等于val的第一个元素位置。
如果所有元素都小于val，则返回last的位置，且last的位置是越界的！！~

返回查找元素的第一个可安插位置，也就是“元素值>=查找值”的第一个元素的位置

*/
#include<bits/stdc++.h>
using namespace std;
/*struct Rule{
    int x,y;
    bool operator < (const struct Rule tmp) const
    {
        if(x == tmp.x)
            return y < tmp.y ;
        return x < tmp.x ;
    }

};*/
int Val;
int main(){
    set<int>A;
    for(int i=0;i<3;++i){
        cin>>Val;
        A.insert(Val);
    }
    /*set<int>::iterator it;
    for(it=A.begin();it!=A.end();++it){
        cout<<*it<<' ';
    }*/
    for(int i=0;i<3;++i){
        cout<<A[i]<<' ';
    }
    return 0;
}

2017年3月20日10:10:26

set不能用 数组方式访问！ 
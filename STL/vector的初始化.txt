小菜：

vector<int>Ac(5,3); Ac包含 5个值为3的元素

vector<int>Bc(5);   Bc包含 5个值为0的元素 ， 作用：避免数组动态增长的时候不断分配内存


数组的数组：

vector<int>D;           默认构造函数 D为空

vector<int>E(D);        E是D的一个副本

vector<vector<int> >E;  E 数组的 每一个元素 都是一个动态数组



vector<string> F;

vector<string> G(F.begin(),F.end())  G是与 F相同的容器（ 完全复制 ）


assign 拷贝函数： Ac.assign(n,elem)  将 n个 elem的拷贝值 赋值给 Ac
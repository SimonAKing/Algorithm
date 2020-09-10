如果vector里面的元素类型是简单类型（内置类型），可以直接使用“==”或者“!=”进行比较
因为在STL里面，==和!=是可以直接使用的：
template< class T, class Alloc >
bool operator==( const vector<T,Alloc>& lhs,
                 const vector<T,Alloc>& rhs );

template< class T, class Alloc >
bool operator!=( const vector<T,Alloc>& lhs,
                 const vector<T,Alloc>& rhs );
甚至可以使用“<=” “<” “>=” “>”比较两个vector大小：按照字典序排列
template< class T, class Alloc >
bool operator<( const vector<T,Alloc>& lhs,
                const vector<T,Alloc>& rhs );

template< class T, class Alloc >
bool operator<=( const vector<T,Alloc>& lhs,
                 const vector<T,Alloc>& rhs );

template< class T, class Alloc >
bool operator>( const vector<T,Alloc>& lhs,
                const vector<T,Alloc>& rhs );

template< class T, class Alloc >
bool operator>=( const vector<T,Alloc>& lhs,
                 const vector<T,Alloc>& rhs );

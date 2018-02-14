
#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;

long  ans=0,leng=0;

long find(long n,long fec,long l ){//剩余被除数，因子，长度；
    if(n%fec==0){
        return find(n/fec,fec+1,l+1);
    }
    else return l;
}
int main(){
    long n;
    cin>>n;
    for(long i=2;i<sqrt(n);i++){
        if(n%i==0){
            int l=find(n/i,i+1,1);
            if(l>leng){
                leng=l;ans=i;
            }
        }
    }
    
    if(leng==0){
        cout<<1<<endl;
        cout<<n<<endl;
        return 0;
    }
    cout<<leng<<endl;
    for(int i=0;i<leng-1;i++){
        printf("%ld*",ans+i);
    }
    printf("%ld\n",ans+leng-1);
    return 0;

}

-----------------------------------------------------------------------------------------

#include<bits/stdc++.h>
using namespace std;

int Num[13];

bool Judge(int S,int D,int N){
	int Ans=Num[S];
	for(int i=S+1;i<=D;++i){
		if(Num[i]==Num[i-1]+1)
			Ans*=Num[i];
		else
			return false;
	}
	if(N%Ans)
		return false;
	else
		return true;
	
}

int main(){
	int N,R=0;
	scanf("%d",&N);
	
	
	//把N的所有因子存起来，并排序
	int M=sqrt(N);
	Num[R++]=N;
	for(int i=2;i<=M;++i){
		if(N%i==0){
			Num[R++]=i;
			if(i!=N/i){
				Num[R++]=N/i;
			}
			
		}
	}
	sort(Num,Num+R);
	 
	//截取数组中的连续元素，
	//并找到，符合条件，并且是最长的连续长度 
	int Count=1,S=0;
	for(int i=0;i<R-2;++i){
		
		for(int j=i+1;j<R;++j){
			
			if(Judge(i,j,N)){
				
				if(j-i+1>Count){
					Count=j-i+1;
					S=i;//此题的聪明之处 
				}
			}
			
		
		}
		
	}
	
	
	//输出，主要看输出元素时 的做法，很聪明。 
	printf("%d\n",Count); 
	for(int i=0;i<Count;++i){
		if(i!=Count-1)
			printf("%d*",Num[S]+i);//题难之处，把其化为简单用 
		else
			printf("%d\n",Num[S]+i);
	}
	return 0;
}
//POJ-1013
//解题思路--郭炜，自己脑子笨，没有实力解决，郭炜教授代码 也是琢磨半天 才明白。失落，佩服。 
//对于 每一枚硬币 先假设 它是轻的，看这样 是否符合称量结果。
//如果符合，问题解决。如果不符合，就假设 它是重的，看是否符合称量结果。
//把所有硬币都试一遍，一定能找到特殊硬币。 
#include <stdio.h>
#include <string.h>

char Left[3][7];
char Right[3][7];
char Result[3][7];
bool IsFake(char,bool);

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        for(int i=0;i<3;++i)
            scanf("%s %s %s",Left[i],Right[i],Result[i]);
        for(char c='A';c<='L';++c){
            if(IsFake(c,true)){//假设硬币是轻的 
                printf("%c is the counterfeit coin and it is light.\n",c);
                break;
            }  
            else if(IsFake(c,false)){//假设硬币是重的 
                printf("%c is the counterfeit coin and it is heavy.\n",c);
                break;
            }
        }
    }
    return 0;
} 

bool IsFake(char c,bool light){
    for(int i=0;i<3;++i){
        //如果 light 为 true：该硬币为轻硬币，pLeft保留Left[i]的地址，pRight保留Right[i]的地址 
        //如果 light 为 false：该硬币为重硬币 ，pLeft保留Right[i]的地址，pRight保留Left[i]的地址 
        char *pLeft,*pRight;
        pLeft=light?Left[i]:Right[i]; 
        pRight=light?Right[i]:Left[i];
        //这两个字符指针的作用：时刻指向 天平左端与右端 或者 天平右端与左端 以便于下一步操作，很精髓
         
        switch(Result[i][0]){
            
            case 'u'://右端上浮 说明：右端有轻硬币 或者 左端有重硬币 
                if(strchr(pRight,c)==NULL)//如果右端 无轻硬币 或者 左端 无重硬币，且右端 上浮 
                    return false;//说明 该硬币不是特殊硬币 
                break;
                
            case 'e'://两端平衡 说明：两端都不应该存在 特殊硬币 
                if(strchr(pLeft,c) || strchr(pRight,c))//如果两端 有一端有该硬币，且没出现特殊状况 
                    return false;//说明 该硬币不是特殊硬币 
                break;
                
            case 'd'://右端下沉 说明：左端有轻硬币 或者右端有重硬币 
                if(strchr(pLeft,c)==NULL)//如果左端 无轻硬币 或者 右端 无重硬币，且右端 下沉 
                    return false;//说明该硬币不是特殊硬币 
                break;
        } 
    }
    return true;
}

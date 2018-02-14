
最干净的压缩路径，但耗时，解决办法，暂无。 
int Find(int r){
	while(r!=pre[r]){
		r=pre[r];
	}
	return r;
}
void Mix(int x,int y){
	int Fx=Find(x);
	int Fy=Find(y);
	if(Fx!=Fy){
		pre[Fx]=Fy;
		for(int i=1;i<=N;++i){
			if(pre[i]==Fx){
				pre[i]=Fy;
			}
		}
	}
}

后续压缩路径的普遍做法，但并不干净彻底，
因为，会有个别先来的儿子一直压缩不进来 
Eg：1 2,2 5，最后 1 与 5 并不相连 
int Find(int r){
	while(r!=pre[r]){
		r=pre[r];
	}
	return r;
}
void Mix(int x,int y){
	int Fx=Find(x);
	int Fy=Find(y);
	if(Fx!=Fy){
		pre[Fx]=Fy;
		int i=x,j;
		while(pre[i]!=Fy){
			j=i;
			pre[i]=Fy;
			i=pre[j];
		}
	}
}

前序压缩路径，更不干净 
int Find(int x){
	int r=x
	while(r!=pre[r]){
		r=pre[r];
	}
	return r;
	int i=x,j;
	while(pre[i]!=r){
		j=i;
		pre[i]=r;
		i=pre[j];
	}
}
void Mix(int x,int y){
	int Fx=Find(x);
	int Fy=Find(y);
	if(Fx!=Fy){
		pre[Fx]=Fy;
	}
}


情况和后续压缩路径相似 
int Find(int r){
	if(r!=pre[r])
		pre[r]=Find(pre[r]);
	return pre[r];
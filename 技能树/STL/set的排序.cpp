struct Word {

	int times;
	string wd;
};


struct Rule {

	bool operator () ( const Word & w1,const Word & w2) {
		if( w1.times != w2.times)
			return w1.times > w2.times;
		else
			return w1.wd < w2.wd;
	}
};

set<Word,Rule> st;
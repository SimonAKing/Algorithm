#include <stdio.h>
#include <string.h>

int main(){
	char str[1024];
	while(~scanf("%s", str)){
		int len = strlen(str);
		char result[len];
		for(int i = 0;i < len;i++) {
			char letter = str[i];
			if(letter >= 'A' && letter <= 'Z') {
				result[i] = letter + 32;
			} else if(letter >= 'a' && letter <= 'z') {
				result[i] = letter - 32;
			}else if(letter >= '0' && letter <= '9') {
				result[i] = '0';
			}else {
				result[i] = '#';
			}
		}

		printf("%s\n", result);
	}
	return 0;
}

package kata

func ValidBraces(str string) bool {
 braces := map[string]int{
	"()": 0,
	"[]": 0,
	"{}": 0,
 }
 for i, s := range str {
	switch string(s) {
	case "(":
	 braces["()"]++
	case ")":
	 braces["()"]--
	 if i > 0 {
		switch string(str[i-1]) {
		case "[", "{":
		 return false
		}
	 }
	case "[":
	 braces["[]"]++
	case "]":
	 braces["[]"]--
	 if i > 0 {
		switch string(str[i-1]) {
		case "(", "{":
		 return false
		}
	 }
	case "{":
	 braces["{}"]++
	case "}":
	 braces["{}"]--
	 if i > 0 {
		switch string(str[i-1]) {
		case "(", "[":
		 return false
		}
	 }
	}
	for _, v := range braces {
	 if v < 0 {
		return false
	 }
	}
 }
 for _, v := range braces {
	if v != 0 {
	 return false
	}
 }
 return true
}

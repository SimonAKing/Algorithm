package kata

import (
	"reflect"
	"testing"
)

func TestSortByLength(t *testing.T) {
	if ans := SortByLength([]string{"1", "2"}); reflect.DeepEqual(ans, []string{"1", "2"}) == false {
		t.Errorf("expected 1,2 but %s got", ans)
	}

	if ans := SortByLength([]string{"12", "2"}); reflect.DeepEqual(ans, []string{"2", "12"}) == false {
		t.Errorf("expected 12,2 but %s got", ans)
	}
}

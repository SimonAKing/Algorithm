package kata

import (
	"reflect"
	"testing"
)

func TestBackwardsPrime(t *testing.T) {
	type args struct {
		start int
		stop  int
	}
	tests := []struct {
		name string
		args args
		want []int
	}{
		{"test1", args{2, 100}, []int{13, 17, 31, 37, 71, 73, 79, 97}},
		{"test2", args{9900, 10000}, []int{9923, 9931, 9941, 9967}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := BackwardsPrime(tt.args.start, tt.args.stop); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("BackwardsPrime() = %v, want %v", got, tt.want)
			}
		})
	}
}

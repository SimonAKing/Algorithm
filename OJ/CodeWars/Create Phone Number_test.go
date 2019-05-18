package kata

import "testing"

func TestCreatePhoneNumber(t *testing.T) {
	type args struct {
		numbers [10]uint
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := CreatePhoneNumber(tt.args.numbers); got != tt.want {
				t.Errorf("CreatePhoneNumber() = %v, want %v", got, tt.want)
			}
		})
	}
}

package main

import (
	"fmt"
	"log"
	"math"
	"regexp"
	"strconv"
	"strings"
)

func SolveRPN(rpn string) float64 {
	OPERATORS := map[string]func(float64, float64) float64{
		"/": func(a, b float64) float64 {
			return a / b
		},
		"*": func(a, b float64) float64 {
			return a * b
		},
		"^": func(a, b float64) float64 {
			return math.Pow(a, b)
		},
		"+": func(a, b float64) float64 {
			return a + b
		},
		"-": func(a, b float64) float64 {
			return a - b
		},
	}
	var stack []float64
	solve := strings.Split(regexp.MustCompile(`\s+`).ReplaceAllString(rpn, " "), " ")
	for _, symbol := range solve {
		number, err := strconv.ParseFloat(symbol, 10)
		if err == nil {
			stack = append(stack, number)
		} else if strings.Contains("/*^+-", symbol) {
			l := len(stack)
			a, b := stack[l-1], stack[l-2]
			stack = append(stack[:l-2], OPERATORS[symbol](b, a))
		} else {
			log.Fatal(symbol, "is not a recognized symbol")
		}
	}
	if len(stack) == 1 {
		return stack[0]
	} else {
		log.Fatal(rpn, "is not a proper RPN. Please check it and try again")
		return -1
	}
}

func main() {
	fmt.Println(SolveRPN("15 7 1 1 + - / 3 * 2 1 1 + + -"))
	fmt.Println(SolveRPN("2 3 ^"))
}

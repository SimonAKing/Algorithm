package kata

import "regexp"

func DNAStrand(dna string) string {
 m := map[string]string{
	"G": "C",
	"T": "A",
	"A": "T",
	"C": "G",
 }
 return regexp.MustCompile("[GTAC]").ReplaceAllStringFunc(dna, func(s string) string {
	return m[s]
 })
}

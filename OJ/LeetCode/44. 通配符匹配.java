class Solution {
    public boolean isMatch(String s, String p) {

        boolean table[][] = new boolean[s.length()+1][p.length()+1];

        table[0][0] = true;

        for (int col=1; col<table[0].length; col++) {
            if (p.charAt(col-1) == '*') {
                table[0][col] = table[0][col-1];
            }
        }

        for (int row=1; row<table.length; row++) {
            char ch1 = s.charAt(row-1);
            for (int col=1; col<table[row].length; col++) {
                char ch2 = p.charAt(col-1);
                if (ch1 == ch2 || ch2 == '?') {
                    table[row][col] = table[row - 1][col - 1];
                } else if (ch2 == '*'){
                    table[row][col] = table[row][col - 1] || table[row - 1][col];
                }
            }
        }

        boolean[] lastRow = table[table.length-1];
        return lastRow[lastRow.length-1];
    }
}

# Read from the file file.txt and output the tenth line to stdout.
# awk 'NR == 10' file.txt

# sed -n 10p file.txt

count=`cat file.txt | wc -l`
out=`cat file.txt | head -10 | tail -1`
if [ $count -lt 10 ]
then
    echo ""
else echo $out
fi

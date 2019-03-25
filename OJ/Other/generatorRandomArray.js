const genRanArr = (length , limit)=>(Array.from({length},()=>Math.floor(Math.random()*limit)))

console.log(genRanArr(10,100))

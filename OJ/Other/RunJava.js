const {spawnSync} = require('child_process')

const fs = require('fs')

const path = require('path')

const FileName = 'HelloWorld'

const javaString = `
	import java.util.*;
	public class HelloWorld{
		public static void main(String[] args){
			HashMap<String,Stirng> hash = new HashMap<String,String>();
			hash.put("Hello","World");
			System.out.println(hash);
		}
	}
`

const URL = path.resolve(__dirname,`${FileName}.java`)

fs.writeFileSync(URL,javaString)

const {stderr} = spawnSync('javac',[`${FileName}.java`,'-xlint:unchecked'],{
	encoding:'utf-8'
})

if(!stderr){
	const { stdout,stderr:std } = spawnSync('javac', FileName, {
		encoding: 'utf-8'
	})
	console.log(std)
}

console.log(stderr)

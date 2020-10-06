// const longestValidParentheses=(s,r =/(\((_*)\))/g,c=()=>r.test(s)&&(s=s.replace(r,'__$2'),c()),_=c())=>Math.max(...s.split(/[()]/g).map(({length})=>length))

const longestValidParentheses = (s, r = /(\((_*)\))/g) => {
	while (r.test(s)) { s = s.replace(r, '__$2') }
	return Math.max(...s.split(/[()]/g).map(({ length: i }) => i))
}

const r = longestValidParentheses('()((((())))()')

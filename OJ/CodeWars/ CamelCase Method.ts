export function camelCase(str: string): string {
	return str.split(' ').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('')
}

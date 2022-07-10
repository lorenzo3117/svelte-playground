export function dateToString(date: number | Date) {
	return new Date(date).toLocaleString('en-GB');
}

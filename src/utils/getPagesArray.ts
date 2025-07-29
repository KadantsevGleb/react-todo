export default function getPagesArray(total: number, limit: number) {
	const pagesCount = Math.ceil(total / limit)

	let result: number[] = []
	for (let i = 1; i <= pagesCount; i++) {
		result.push(i)
	}

	return result
}
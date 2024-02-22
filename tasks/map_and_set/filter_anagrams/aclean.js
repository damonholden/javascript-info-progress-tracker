export function aclean(arr) {
	const anagramMap = new Map();

	for (const string of arr) {
		const lowercasedAndSortedValue = string.toLowerCase().split('').sort().join('');
		anagramMap.set(lowercasedAndSortedValue, string);
	}

	return Array.from(anagramMap.values());
}
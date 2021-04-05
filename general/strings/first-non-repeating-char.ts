type MapType = {
	count: number;
	index: number;
};

export function firstNonRepeatingCharacter(string: string) {
	const charMap: Map<string, MapType> = new Map();
	let found = -1;

	for (let i = 0; i < string.length; i++) {
		insertToMap(string[i], i, charMap);
	}

	charMap.forEach((value: MapType, key: string, map: Map<string, MapType>) => {
		if (found !== -1) return;
		if (value.count === 1) found = value.index;
	});

	return found;
}

function insertToMap(item: string, idx: number, map: Map<string, MapType>) {
	const charObj = map.get(item);

	if (!charObj) {
		map.set(item, { count: 1, index: idx });
		return;
	}

	if (charObj?.count > 0) {
		map.set(item, { ...charObj, count: charObj.count + 1 });
		return;
	}
}

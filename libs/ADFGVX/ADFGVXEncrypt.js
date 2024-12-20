function ADFGVXEncrypt(text, map, keyword) {
    const chars = {}
    const minCount = Math.trunc(text.length / keyword.length)
    const addCount = text.length - minCount * keyword.length;
    let start = 0;
    for (i in keyword) {
        console.log(start);
        chars[i] = text.slice(start, ((i < addCount) ? minCount + 1 : minCount) + start)
        start += chars[i].length;
    }
    let recoveryShiftText = ''
    for (j in chars[0])
        for (i in chars) {
            if (chars[i][j]) recoveryShiftText += chars[i][j];
        }

        const keywordObject = {}
    const lowerKeyword = keyword.toLowerCase(); 
    for(i in lowerKeyword) {
        if (!keywordObject[lowerKeyword[i]]) keywordObject[lowerKeyword[i]] = [];
        keywordObject[lowerKeyword[i]].push(i - 0);
    }
    let shiftMap = [];
    Object.keys(keywordObject).sort().forEach(char => shiftMap = shiftMap.concat(keywordObject[char]))
    const unShiftMap = {}
    shiftMap.forEach((shiftKey,key) => unShiftMap[shiftKey] = key)
    const unShiftMapArray = []
    Object.keys(unShiftMap).sort().forEach(key => unShiftMapArray.push(unShiftMap[key]))
    console.log(unShiftMapArray)
    const antiMap = {};
    Object.keys(map).forEach(k => antiMap[map[k]] = k);
    console.log(antiMap)
return Substitution(Shift(recoveryShiftText,unShiftMapArray), antiMap);
}
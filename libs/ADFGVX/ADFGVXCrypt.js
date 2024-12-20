function ADFGVXCrypt(text, map, keyword){
    const subText = Substitution(text.toLowerCase(), map);
    const keywordObject = {}
    const lowerKeyword = keyword.toLowerCase(); 
    for(i in lowerKeyword) {
        if (!keywordObject[lowerKeyword[i]]) keywordObject[lowerKeyword[i]] = [];
        keywordObject[lowerKeyword[i]].push(i - 0);
    }
    let shiftMap = [];
    Object.keys(keywordObject).sort().forEach(char => shiftMap = shiftMap.concat(keywordObject[char]))
    const shiftText = Shift(subText, shiftMap)
    let result = ''
    for(i in keyword)
        for(let j = i - 0; j < shiftText.length; j += keyword.length - 0)
            result += shiftText[j-0];
    return result;
}
function Shift(text, shiftMap){
    let result = ''
    for(let i = 0; i < text.length; i += shiftMap.length)
        for(j in shiftMap)
            if (text[i+shiftMap[j]]) result += text[i+shiftMap[j]]
    return result
}
function Substitution(text, map, none = '') {
    const lengthKey = Object.keys(map)[0].length;
    const chars = [];
    for(let start = 0; start < text.length; start += lengthKey)
        chars.push(text.slice(start, start + lengthKey));
    const result = chars.map(char => map[char] || none);
    return result.join('');
}
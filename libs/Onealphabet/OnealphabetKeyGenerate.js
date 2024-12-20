function onealphabetKeyGenarate(){
    const alpabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const key = {};
    for (char in alpabet) {
        let charCrypt = alpabet[Math.trunc(Math.random()*33)];
        while(alpabet[char] === charCrypt || key[charCrypt])
            charCrypt = alpabet[Math.trunc(Math.random()*33)];
        key[charCrypt] = alpabet[char];
    }
    const result = {};
    Object.keys(key).forEach(char => result[key[char]] = char)
    return result 
}
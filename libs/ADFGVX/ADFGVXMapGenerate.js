function ADFGVXMapGenerate(){
    const alpabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890,.!?- '
    const code = 'ADFGVXT'
    const map = {};
    for (i in code) {
        for (j in code) {
            let charCrypt = alpabet[Math.trunc(Math.random()*49)];
            while(map[charCrypt])
                charCrypt = alpabet[Math.trunc(Math.random()*49)];
            map[charCrypt] = code[i] + code[j];
        }
    }
    return map; 
}
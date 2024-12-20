function gostMapGenerate(){

    function generationMap(){
        const map = [];

        const str = '0123456789abcdef'
    
        for(let i = 0; i < 8; i ++){
            map.push([]);
            let numbers = str;
            while(numbers.length > 0){
                const number = numbers[Math.trunc(Math.random()*numbers.length)]
                map[i].push(number)
                numbers = numbers.replace(number, '')
            }
        }
        return map
    }

    let map = generationMap();
    key = 'aaaaaaaaaaaaaaaa';
    const test = 'ffff'

    while(test != bin2str(gostEncrypt(gostCrypt(str2bin(test),key, map), key, map)))
        map = generationMap()

    return map;
}

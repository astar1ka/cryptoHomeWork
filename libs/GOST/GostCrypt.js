function gostCrypt(text16, key , map) {
    if (key.length != 16) return 'Ключу должен состоять из 16 символом(каждый символ 16 бит)';

    const arr32 = new Uint32Array(2);

    const countStep = 32;
    const keys = [];

    for (let i = 0; i < 8; i++)
        keys.push(parseInt(str2bin(key.slice(i * 2, (i + 1) * 2)), 16))

    const blocks = [];

    for (let i = 0; i < text16.length; i += 16)
        blocks.push(text16.slice(i, i + 16));

    while (blocks[blocks.length - 1].length < 16)
        blocks[blocks.length - 1] = '0' + blocks[blocks.length - 1];

    const two32 = Math.pow(2,32);

    let result16 = '';

    blocks.forEach(block => {
        let A = parseInt(block.slice(0,8), 16);
        let B = parseInt(block.slice(8,16), 16);
        for(let i = 0; i < countStep; i++){
            const k = (i < 24 ) ? i % 8 : ((31 - i) % 8)
			let F = ((A + keys[k]) % two32).toString(16);
            while (F.length < 8) F = '0' + F
            let newF = ''
            for(let k = 0; k < 8; k ++) 
                newF += map[7-k][parseInt(F[k], 16)]
            arr32[0] = parseInt(newF, 16) << 11;
            arr32[1] = parseInt(newF, 16) >> 21;
            arr32[0] = arr32[0] | arr32[1]
            arr32[1] = B;
            arr32[0] = arr32[0] ^ arr32[1]
            B = A
            A = arr32[0]
		}
        let strA = A.toString(16)
        let strB = B.toString(16)
        while(strA.length < 8) strA = '0' + strA
        while(strB.length < 8) strB = '0' + strB

        result16 +=strA
        result16 +=strB;
    })

    return result16;

    function step(R, keys, count) {

    }
}
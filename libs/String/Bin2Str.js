function bin2str(str){
    let result = ''
    for(let i = 0; i < str.length; i += 4){
        let code = str.slice(i, i + 4);
        if (code !='0000') result += String.fromCharCode(parseInt(code,16))
    }
    return result;
}
function str2bin(str){
    const str16 = str.split('').map(char => {
        let char16 = char.charCodeAt().toString(16)
        while (char16.length < 4) char16 = '0' + char16
        return char16
    })
    return str16.join('')
}
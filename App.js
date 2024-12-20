function App(){
    const mainScreen = document.getElementById('mainScreen');

    const cryptMethods = {
        'Onealphabet': {
            name: 'Одноалфавитная замена',
            key: onealphabetKeyGenarate(),
            crypt: function (text) {
                return onealphabetCrypt(text, this.key)
            },
            encrypt: function (text) {
                return onealphabetEncrypt(text, this.key)
            },
            setKey: function(){
                this.key = onealphabetKeyGenarate()
            }
        },
        'ADFGVX': {
            name: 'ADFGVX шифр',
            map: ADFGVXMapGenerate(),
            key: 'SECRET',
            crypt: function (text) {
                return ADFGVXCrypt(text, this.map, this.key)
            },
            encrypt: function (text) {
                return ADFGVXEncrypt(text, this.map, this.key)
            },
            setKey: function(key){
                this.key = key
            }
        },
        'GOST': {
            name: 'ГОСТ',
            map: gostMapGenerate(),
            key: 'Сколько букв нуж',
            crypt: function (text) {
                if (text)
                    return gostCrypt(str2bin(text), this.key, this.map)
            },
            encrypt: function (text) {
                if (text) 
                    return bin2str(gostEncrypt(text, this.key, this.map))
            },
            setKey: function(key){
                this.key = key
            }
        },
        'Probabilistic': {
                name: 'Вероятностный шифр',
                map: gostMapGenerate(),
                key: 'Сколько букв нуж',
                crypt: function (text) {
                    if (text){
                        const text16 = str2bin(text);
                        let textWithTrash = ''
                        for (let i = 0; i < text16.length; i += 2){
                            textWithTrash += text16.slice(i, i + 2) 
                            + Math.trunc(Math.random()*16 - 0.01).toString(16)
                            + Math.trunc(Math.random()*16 - 0.01).toString(16)
                        }
                    return gostCrypt(textWithTrash, this.key, this.map)
                    }

                },
                encrypt: function (text) {
                    if (text) {
                        const encodeText = gostEncrypt(text, this.key, this.map)
                        let textWithoutTrash = ''
                        for (let i = 0; i < encodeText.length; i += 4) 
                            textWithoutTrash += encodeText.slice(i, i+2);
                        return bin2str(textWithoutTrash)
                    }
                },
                setKey: function(key){
                    this.key = key
                }
        },
    }

    let state = '';

    const menu = CreateElement('div', mainScreen)

    Object.keys(cryptMethods).forEach(method => {
        const selectCrypt = CreateElement('input', menu, {type: 'radio', name: 'crypt', value: method})
        const label = CreateElement('label', menu, { innerHTML: cryptMethods[method].name})
        selectCrypt.oninput = () => {
            state = method
            warning.innerHTML = '';
        };
    })

    const warning = CreateElement('label', mainScreen, { innerHTML: '', className: 'warning'})

    const input = CreateElement('textarea', mainScreen, {placeholder: 'Введите текст, который хотите расшифровать или зашифровать'})
    const output = CreateElement('textarea', mainScreen, {disabled: true, placeholder: 'Здесь будет результат'})
    const inputKey = CreateElement('textarea', mainScreen, {placeholder: 'Введите новый ключ и нажмите [Сменить ключ] для смены ключа'})

    const cryptButton = CreateElement('button', mainScreen, {innerHTML: 'Зашифровать'})
    const encryptButton = CreateElement('button', mainScreen, {innerHTML: 'Расшифровать'})
    const newKeyButton = CreateElement('button', mainScreen, {innerHTML: 'Сменить ключ'})
    cryptButton.onclick = () => (cryptMethods[state]) ? output.value = (cryptMethods[state].crypt(input.value) || '') : warning.innerHTML = 'Выберите метод шифрования';
    encryptButton.onclick = () => (cryptMethods[state]) ? output.value = (cryptMethods[state].encrypt(input.value) || ''): warning.innerHTML = 'Выберите метод шифрования';
    newKeyButton.onclick = () => (cryptMethods[state]) ? cryptMethods[state].setKey(inputKey.value) : warning.innerHTML = 'Выберите метод шифрования';
}
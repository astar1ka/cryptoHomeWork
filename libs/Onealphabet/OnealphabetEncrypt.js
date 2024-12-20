function onealphabetEncrypt(text, key){
    const antiKey = {};
    Object.keys(key).forEach(k => antiKey[key[k]] = k);
    return Substitution(text, antiKey);
}
function onealphabetCrypt(text, key){
    return Substitution(text.toLowerCase(), key);
}
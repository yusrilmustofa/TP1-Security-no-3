function encryptOneTimePad(plaintext, pad) {
    let repeatedPad = pad.repeat(Math.ceil(plaintext.length / pad.length)).slice(0, plaintext.length);
    
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let encryptedChar = plaintext.charCodeAt(i) ^ repeatedPad.charCodeAt(i);
        ciphertext += String.fromCharCode(encryptedChar);
    }
    return ciphertext;
}

module.exports ={
    encryptOneTimePad
}
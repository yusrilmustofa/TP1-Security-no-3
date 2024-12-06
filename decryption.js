// Fungsi untuk dekripsi menggunakan One-Time Pad
function decryptOneTimePad(ciphertext, pad) {
    let repeatedPad = pad.repeat(Math.ceil(ciphertext.length / pad.length)).slice(0, ciphertext.length);
    
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        let decryptedChar = ciphertext.charCodeAt(i) ^ repeatedPad.charCodeAt(i);
        plaintext += String.fromCharCode(decryptedChar);
    }
    return plaintext;
}

module.exports ={
    decryptOneTimePad
}
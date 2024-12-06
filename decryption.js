// Fungsi untuk dekripsi menggunakan One-Time Pad
function decryptOneTimePad(ciphertext, pad) {
    // Perluas pad agar sesuai panjang ciphertext
    let repeatedPad = pad.repeat(Math.ceil(ciphertext.length / pad.length)).slice(0, ciphertext.length);
    
    // Dekripsi menggunakan XOR
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        // XOR antara ASCII ciphertext dan pad
        let decryptedChar = ciphertext.charCodeAt(i) ^ repeatedPad.charCodeAt(i);
        plaintext += String.fromCharCode(decryptedChar);
    }
    return plaintext;
}

module.exports ={
    decryptOneTimePad
}
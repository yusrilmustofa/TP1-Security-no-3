// Fungsi untuk enkripsi menggunakan One-Time Pad
function encryptOneTimePad(plaintext, pad) {
    // Perluas pad agar sesuai panjang plaintext
    let repeatedPad = pad.repeat(Math.ceil(plaintext.length / pad.length)).slice(0, plaintext.length);
    
    // Enkripsi menggunakan XOR
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        // XOR antara ASCII plaintext dan pad
        let encryptedChar = plaintext.charCodeAt(i) ^ repeatedPad.charCodeAt(i);
        ciphertext += String.fromCharCode(encryptedChar);
    }
    return ciphertext;
}

module.exports ={
    encryptOneTimePad
}
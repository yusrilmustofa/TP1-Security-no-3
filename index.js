const encrypt = require('./encryption')
const decrypt = require('./decryption')


let plaintext = "Ruko, Jl. Dr. Setiabudi No.192, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40152";
let pad = "2702374301";

console.log("PLAIN TEXT:",plaintext)
console.log("NIM:",pad)

const encrypted = encrypt.encryptOneTimePad(plaintext,pad)
console.log("HASIL ENCRYPTED:",encrypted)

const decrypted = decrypt.decryptOneTimePad(encrypted,pad)
console.log("HASIL DECRYPTED:",decrypted)






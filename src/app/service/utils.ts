import Private from "../../../private"
import crypto from 'crypto';

const secret = Private.secret;

function aesEncrypt(data:string) {
    const cipher = crypto.createCipher('aes192', secret);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
 
function aesDecrypt(encrypted:string) {
    const decipher = crypto.createDecipher('aes192', secret);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

export  default{
    aesEncrypt:aesEncrypt,
    aesDecrypt:aesDecrypt
}
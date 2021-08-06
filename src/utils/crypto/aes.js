/*
 * @Description: aes 加解密
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 14:38:58
 */
const CryptoJS = require("crypto-js");

class Cryptogram {
  constructor(options = null) {
    const defaultOptions = {   // 设置公钥
      publicKey: `MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH9RB1AJw1b5f1eE52+icZplN40I
eAooLdn9zb2tJCHmUQuFHaMAgUGTlrMYstjjy5MMvteZ3L0LmJd9g9Czyp2PQblk
WEATn3YA9G00DiEgWJZ5cc7BFrLHIbFqSK8+BBFxGcFHhD2gvp62OaJPTkRvYgjv
r+TvVdvVRo3DPT/rAgMBAAE=`
    };

    Object.assign(this, defaultOptions, options);

    this.aesKey = CryptoJS.enc.Utf8.parse(this.publicKey.slice(0, 128));
  }

  aesEncrypt(txt) {
    // AES加密
    const cipher = CryptoJS.AES.encrypt(txt, this.aesKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return cipher.toString();
  }

  aesDecrypt(txt) {
    // AES解密
    const cipher = CryptoJS.AES.decrypt(txt, this.aesKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(cipher);
  }
}

const cryptogram = new Cryptogram();
export default cryptogram;

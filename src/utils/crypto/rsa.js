/*
 * @Description: 加/解密 crypty-js 、 jsencrypt 
    - RSA加密
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 13:24:23
 */
import { JSEncrypt } from "jsencrypt";

// RSA加密
export const HkSetEncrypt = (pubKey, value) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(pubKey);
    return encrypt.encrypt(value);
};

export function setEncrypt(str) {
    const key = `-----BEGIN PUBLIC KEY-----
      MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH9RB1AJw1b5f1eE52+icZplN40I
      eAooLdn9zb2tJCHmUQuFHaMAgUGTlrMYstjjy5MMvteZ3L0LmJd9g9Czyp2PQblk
      WEATn3YA9G00DiEgWJZ5cc7BFrLHIbFqSK8+BBFxGcFHhD2gvp62OaJPTkRvYgjv
      r+TvVdvVRo3DPT/rAgMBAAE=
      -----END PUBLIC KEY-----`;
    const jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(key);   // 设置公钥
    return jsencrypt.encrypt(str);
}

/*
 * @Description: 加/解密 crypty-js 、 jsencrypt 
    - RSA加密
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-06 13:24:23
 */

// 公钥
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU/hbv04Efj5lDd6cTJFLuaHWXszy8kmnO0skAPeWp5CqgnNdzgUjD9sc6BLUWyb+NWLxO559z2bhhb2rWLDZ9MWMdX32w3FGiG3/2FAYubNBlNLv9pXPluj6QOj9TYWtMeb/RtCbDyNXFx0zeSV3vPyZ3kH7lJEIgERvie8bMWwIDAQAB
-----END PUBLIC KEY-----`;

// 私钥
const privateKey =`-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANT+Fu/TgR+PmUN3pxMkUu5odZezPLySac7SyQA95ankKqCc13OBSMP2xzoEtRbJv41YvE7nn3PZuGFvatYsNn0xYx1ffbDcUaIbf/YUBi5s0GU0u/2lc+W6PpA6P1Nha0x5v9G0JsPI1cXHTN5JXe8/JneQfuUkQiARG+J7xsxbAgMBAAECgYEAzS38sImiQOIXdbvlMfZzAYGVjk62+r1cukWqJdZ60J+hRNnyXy2zCDxJjaWNQWeWZLaPqL9Ohs685PftBmbPESalWdIjADijM0HKDFS6GKEYd3CcyJPRT1joRDMnyr7GhxpngcvKTHcsxwqZdlBCjjrOe+zL9yMl3mXSKytMHEliLoTnM6F1t2WOuPk+qcc8LCVB1LV/vhVPg98tg==
-----END PRIVATE KEY-----`

import { JSEncrypt } from "jsencrypt";
const Base64 = require('js-base64').Base64
// Base64.encode('需要转base64的内容')

// RSA加密
// export const HkSetEncrypt = (pubKey, value) => {
//     const encrypt = new JSEncrypt();
//     encrypt.setPublicKey(pubKey);
//     return encrypt.encrypt(value);
// };

// RSA加密
export function setEncrypt(str) {
  const jsencrypt = new JSEncrypt();
  jsencrypt.setPublicKey(publicKey);   // 设置公钥
  return jsencrypt.encrypt(str);
}

//解密方法 (失效 , 原因未知)
export function RSAdecrypt(str) {
  let jse = new JSEncrypt();
  jse.setPrivateKey(privateKey);  
  return jse.decrypt(str);
}



// export function setEncrypt(text) {
// 	let encrypt = new JSEncrypt();
// 	encrypt.setKey(publicKey);
// 	let data = encrypt.encrypt(Base64.encode(text));
// 	return data;
// }
 
// //解密
// export function RSAdecrypt(data) {
// 	let decryp = new JSEncrypt();
// 	decryp.setKey(publicKey);
// 	let text = Base64.decode(decryp.decrypt(data));
// 	return text;
// }

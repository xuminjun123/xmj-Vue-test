/*
 * @Description: api
 * @param :
 * @return:
 * @Author: xmj
 * @Date: 2021-06-10 15:44:59
 */
import request from "@/utils/request";

console.log('process=>', process.env.VUE_APP_BASE_API  );


// 获取验证码
export function getCodeImg() {
  return request({
    url: "/captchaImage",
    method: "get",
  });
}

// 获取jwt
export function getJwt(data) {
  return request({
    url: "/login",
    method: "get",
    params:data
  });
}

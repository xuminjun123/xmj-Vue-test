/*
 * @Description: await to js 插件源码
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-21 09:52:13
 */

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = any>(
    promise: Promise<T>,
    errorExt?: object
): Promise<[U | null, T | undefined]> {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>(err => {
            if (errorExt) {
                Object.assign(err, errorExt)
            } return [err, undefined]
        })
}

export default to

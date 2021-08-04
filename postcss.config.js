/*
 * @Description:  
        适配方案采用rem布局， 
        根据屏幕分辨率大小不同，
        调整根元素html的font-size， 
        从而达到每个元素宽高自动变化，适配不同屏幕
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-03 09:24:57
 */
module.exports = {
    plugins: {
        autoprefixer: {},
        // 'postcss-px2rem-exclude': {
        //     remUnit: 192
        //     // exclude: /node_modules|folder_name/i,
        // }
    }
}

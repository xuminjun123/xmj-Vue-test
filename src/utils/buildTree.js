/*
 * @Description: buildTree 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-14 17:00:49
 */
// 使用 map形式 构建 tree (速度快)
export function arrayToTree(data = []) {
    let res = [];
    let map = {};

    // 构建成map 的数据
    data.forEach(item =>{
        map[item.id] = item
    })
    // console.log('map',map); 
    
    data.forEach((item)=>{
        let parent = map[item.pid]; // 找到父节点
        // console.log('parent-->',parent);
        
        if(parent) {
            (parent.children || (parent.children = [])).push(item)
        }else {
            // 根节点
            res.push(item)
        }
    })
    return res
}
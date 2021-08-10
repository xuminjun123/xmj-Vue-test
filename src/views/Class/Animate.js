/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-09 09:49:58
 */
class Animate {
    #name;
    constructor(name){
        this.#name = name
    };

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }

}

export default Animate;
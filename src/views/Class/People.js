import Animate from "./Animate";

/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-08-09 09:53:47
 */
class People extends Animate {
    #name;
    constructor(name) {
        super(); 
        this.#name = name
    }

    setName(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }

    changeName(){
        super.setName('cat')
        let name =  super.getName();
        return name;
    }
}
let people = new People();
export default people;
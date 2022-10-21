class SnakeCell{
    #x
    #y
    #position
    constructor(x, y) {
       this.#x = x;
       this.#y = y;
    }

    get position(){
        return [this.#x, this.#y];
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y
    }

    set x(val){
        this.#x = val;
    }

    set y(val){
        this.#y = val;
    }
}
export default SnakeCell;
class Apple{
    #position;
    #width
    #height
    #src
    #canvasWidth;
    #canvasHeight;
    constructor(width, height, canvasWidth, canvasHeight) {
        this.#width = width;
        this.#height = height;
        this.#canvasWidth = canvasWidth;
        this.#canvasHeight = canvasHeight;
        this.#position = [];
        this.#src = 'apple.jpg'
        this.changePosition();
    }

    get src(){
        return this.#src;
    }

    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }

    get position() {
        return this.#position;
    }

    set position(value) {
        this.#position = value;
    }

    get x(){
        return this.#position[0];
    }
    get y(){
        return this.#position[1];
    }

    changePosition(){
        const x = Math.floor(Math.random() * (this.#canvasWidth - this.width) + this.width);
        const y = Math.floor(Math.random() * (this.#canvasHeight - this.height) + this.height);
        this.position = [x, y];
        console.log(this.position);
    }
}

export default Apple;
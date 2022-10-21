import SnakeCell from "./snakeCell.js";

class Snake {
    #length;
    #position; // [x, y] of head
    #body;
    #width;
    #height;
    #score;
    constructor() {
        this.#length = 5;
        this.#width = 5;
        this.#height = 5;
        this.#position = [100, 100]; // temp solution
        this.#body = [];
        this.#getStartPosition()
        this.#score = 0;

    }

    get score(){
        return this.#score;
    }

    set score(value){
        this.#score = value
    }

    get height() {
        return this.#height;
    }

    get width() {
        return this.#width;
    }

    get body() {
        return this.#body;
    }

    get length() {
        return this.#length;
    }

    set length(value) {
        this.#length = value;
    }

    get position() {
        return this.#position;
    }

    set position(value) {
        this.#position = value;
    }

    get x() {
        return this.#position[0]
    }

    get y() {
        return this.#position[1]
    }


    makeMove(direction) {
        this.position = [this.x + (direction[0] * 5), this.y + (direction[1] * 5)];
        const cells = this.body;
        for (let i = cells.length - 1; i >= 0; i--) {
            if (i === 0) {
                cells[i].x = this.x
                cells[i].y = this.y
            } else {
                cells[i].x = cells[i - 1].x
                cells[i].y = cells[i - 1].y
            }
        }
    }

    eatApple(){
        let lastCell = this.body[this.body.length - 1];
        this.body.push(new SnakeCell(lastCell.x, lastCell.y))
    }


    #getStartPosition() {
        let prevX = this.position[0];
        let prevY = this.position[0];
        for (let i = 0; i < this.#length; i++) {
            const bodyCell = new SnakeCell(prevX, prevY);
            this.#body.push(bodyCell);
            prevX -= this.#width;
        }

    }


}

export default Snake;
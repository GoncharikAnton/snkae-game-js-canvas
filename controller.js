class SnakeController{
    #snake
    #apple
    #view
    #canvas
    constructor(snake, apple, view, canvas){
        this.#snake = snake;
        this.#apple = apple;
        this.#view = view;
        this.#canvas = canvas;
    }


    get snake() {
        return this.#snake;
    }
    get canvas() {
        return this.#canvas;
    }

    get apple() {
        return this.#apple;
    }


    get view() {
        return this.#view;
    }


    checkMetWall(){
        const canvasEndW = this.canvas.width;
        const canvasEndH = this.canvas.height;
        if(this.snake.x >= canvasEndW || this.snake.y >= canvasEndH
        || this.snake.x === 0 || this.snake.y === 0){
            alert(`You loose! Your score ${this.snake.score}`)
        }
    }

    checkEatApple() {
        if (this.snake.x >= this.apple.x - 10 && this.snake.x <= this.apple.x + 15 &&
            this.snake.y >= this.apple.y - 10 && this.snake.y <= this.apple.y + 15) {
            this.snake.score += 1;
            this.snake.length += 1;
            this.apple.changePosition();
            this.snake.eatApple()
        }

    }


}

export default SnakeController;
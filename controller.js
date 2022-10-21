class SnakeController{
    #snake
    #apple
    #view
    #canvas
    #direction
    constructor(snake, apple, view, canvas){
        this.#snake = snake;
        this.#apple = apple;
        this.#view = view;
        this.#canvas = canvas;
        this.#direction = [1,0];
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

    get direction() {
        return this.#direction;
    }
    set direction(value){
        this.#direction = value;
    }

    startGame(){
        this.interval = setInterval(()=>{
            const loose = this.snake.makeMove(this.direction);
            if(loose){
                clearInterval(this.interval);
            }
            this.view.renderSnake()
            this.view.renderApple()
            this.checkMetWall()
            this.checkEatApple()
        }, 50);

    }

    checkMetWall(){
        const canvasEndW = this.canvas.width;
        const canvasEndH = this.canvas.height;
        if(this.snake.x >= canvasEndW || this.snake.y >= canvasEndH
        || this.snake.x === 0 || this.snake.y === 0){
            alert(`You loose! Your score ${this.snake.score}`);
            clearInterval(this.interval)
        }
    }

    checkEatApple() {
        if (this.snake.x >= this.apple.x - 10 && this.snake.x <= this.apple.x + 12.5 &&
            this.snake.y >= this.apple.y - 10 && this.snake.y <= this.apple.y + 12.5) {
            this.snake.score += 1;
            this.snake.length += 1;
            this.apple.changePosition();
            this.snake.eatApple();
        }
    }

    pauseTheGame(decision){
        if(decision){
            clearInterval(this.interval);
        }else{
            this.startGame()
        }
    }


}

export default SnakeController;
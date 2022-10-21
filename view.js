class SnakeView {
    #snake
    #apple
    #canvas

    constructor(snake, apple, canvas) {
        this.#snake = snake;
        this.#apple = apple;
        this.#canvas = canvas;
    }

    get canvas() {
        return this.#canvas;
    }

    renderSnake() {
        this.clearBoard()

        const snake = this.#snake;
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        for (let i = 0; i < this.#snake.body.length; i++) {
            const cell = this.#snake.body[i]
            ctx.fillRect(cell.x, cell.y, snake.width, snake.height);
            // ctx.fill()

        }
    }

    renderApple() {
        const position = this.#apple.position;
        const ctx = this.canvas.getContext('2d');
        const img = new Image();
        img.src = this.#apple.src;
        img.style.width = this.#apple.width;
        img.width = this.#apple.width;
        img.height = this.#apple.height;
        img.style.height = this.#apple.height;
        img.onload = () => {
            ctx.drawImage(img, position[0] - (this.#apple.width / 2), position[1] - (this.#apple.height / 2), 15, 15);
        }
    }


    clearBoard(){
        const ctx = this.#canvas.getContext('2d')
        ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
}

export default SnakeView;
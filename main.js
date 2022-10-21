import Snake from "./snake.js";
import SnakeView from "./view.js";
import Apple from "./apple.js";
import Directions from "./directions.js";
import SnakeController from "./controller.js";

const canvas = document.querySelector('#canvas');
// const ctx = canvas.getContext('2d');
const startBtn = document.querySelector('#startBtn');


const snake = new Snake();
const apple = new Apple(5,5, canvas.width, canvas.height);
const view = new SnakeView(snake, apple, canvas);

const controller = new SnakeController(snake, apple, view, canvas);


let dir = [1, 0];

document.addEventListener('keydown', e => {

    const dirKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown' ];
    const idx = dirKey.indexOf(e.key)
     dir = Directions.allDirections[idx];

})
startBtn.addEventListener('click', () => {
    const interval = setInterval(()=>{
        snake.makeMove(dir)
        view.renderSnake()
        view.renderApple()
        controller.checkMetWall()
        controller.checkEatApple()

    }, 50)

})



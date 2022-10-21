import Snake from "./snake.js";
import SnakeView from "./view.js";
import Apple from "./apple.js";
import Directions from "./directions.js";
import SnakeController from "./controller.js";

const canvas = document.querySelector('#canvas');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');


let controller;
let dir = [1, 0];
let decisionOfPause = true;

document.addEventListener('keydown', e => {
    const dirKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown' ];
    const idx = dirKey.indexOf(e.key)
    dir = Directions.allDirections[idx];
    controller.direction = dir;

})
startBtn.addEventListener('click', () => {
    const snake = new Snake();
    const apple = new Apple(5,5, canvas.width, canvas.height);
    const view = new SnakeView(snake, apple, canvas);
    controller = new SnakeController(snake, apple, view, canvas);

    controller.startGame()
})
pauseBtn.addEventListener('click', ()=>{
    controller.pauseTheGame(decisionOfPause);
    decisionOfPause = !decisionOfPause;
})



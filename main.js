import Snake from "./snake.js";
import SnakeView from "./view.js";
import Apple from "./apple.js";
import Directions from "./directions.js";
import SnakeController from "./snakeController.js";

const canvas = document.querySelector('#canvas');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');


let controller;
let dir = [1, 0];
let decisionOfPause = true;

document.addEventListener('keydown', e => {
    const dirKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown' ];
    const idx = dirKey.indexOf(e.key)
    if(!(dir[0] === -Directions.allDirections[idx][0] || dir[1] === -Directions.allDirections[idx][1])){
        dir = Directions.allDirections[idx];
        controller.direction = dir;
    }

})
startBtn.addEventListener('click', () => {
    if(!controller || controller.end){
        const snake = new Snake();
        const apple = new Apple(15,15, canvas.width, canvas.height);
        const view = new SnakeView(snake, apple, canvas);
        controller = new SnakeController(snake, apple, view, canvas);

        controller.startGame()
    }
    })
pauseBtn.addEventListener('click', ()=>{
    controller.pauseTheGame(decisionOfPause);
    decisionOfPause = !decisionOfPause;
})



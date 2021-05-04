/**
 * Let's make a game 🕹
 */
const position = {x:0, y:0};

type Direction = 'up' | 'down' | 'right' | 'left';
function move(direction: Direction) {
  switch(direction) {
    case 'up':
      position.y += 1;
      break; // 쓰지 않을 경우 맨 밑에까지 내려감
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown ${direction}`);
  }

}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

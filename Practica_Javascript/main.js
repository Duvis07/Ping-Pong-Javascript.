/**
 * Esta funcion va tener toda la propiedad del juego
 */
var game = (function () {
  let time = 30;
  let movement = 20;
  let movementBar = 20;
  let width = document.documentElement.clientWidth - movement;
  let height = document.documentElement.clientHeight - movement;
  let controlGame;
  let player1;
  let player2;
  /**
   * el intervalo de juego se ejecuta al momento ejecutar
   * funcion princioal
   */
  function start() {
    init();
    controlGame = setInterval(play, time);
  }
/**
 * funcion que nos define la direccion  de la pelota
 * y los estados iniciales del juego
 * se crean los objetos player1 y player2
 */
  function init() {
    ball.style.left = 0;
    ball.state = 2;
    ball.direction = 1; // right 1, left 2
    player1 = new Object();
    player2 = new Object();
    player1.keyPress = false;
    player1.keyCode = null;
    player2.keyPress = false;
    player2.keyCode = null;
  }


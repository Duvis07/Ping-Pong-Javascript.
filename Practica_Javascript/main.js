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
  /**
   *
   */

  /**
   * Funcion para mover las barras por medio de las teclas
   * captura las teclas que presiona el player
   */
  function moveBar() {
    if (player1.keyPress) {
      if (player1.keyCode == 81 && bar1.offsetTop >= 0)
        bar1.style.top = bar1.offsetTop - movementBar + "px";
      if (player1.keyCode == 65 && bar1.offsetTop + bar1.clientHeight <= height)
        bar1.style.top = bar1.offsetTop + movementBar + "px";
    }
    if (player2.keyPress) {
      if (player2.keyCode == 79 && bar2.offsetTop >= 0)
        bar2.style.top = bar2.offsetTop - movementBar + "px";
      if (player2.keyCode == 76 && bar2.offsetTop + bar2.clientHeight <= height)
        bar2.style.top = bar2.offsetTop + movementBar + "px";
    }
  }
  /**
   * funcion cuando usuario presiona la tecla
   * @param {*} e
   */
  document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 81: // Q
      case 65: // A
        player1.keyCode = e.keyCode;
        player1.keyPress = true;
        break;
      case 79: // O
      case 76: // L
        player2.keyCode = e.keyCode;
        player2.keyPress = true;
        break;
    }
  };
  /**
   * Funcion para detectar cuando el  usuario despresiona
   * las teclas
   *
   * @param {*} e
   */
  document.onkeyup = function (e) {
    if (e.keyCode == 81 || e.keyCode == 65) player1.keyPress = false;
    if (e.keyCode == 79 || e.keyCode == 76) player2.keyPress = false;
  };

  start();
})();

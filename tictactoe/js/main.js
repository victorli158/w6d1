const View = require ('./ttt-view.js')// require appropriate file
const Game = require ('../bin/game.js')// require appropriate file

$( () => {
  // Your code here
  const $el = $('.ttt');
  const view = new View(new Game(), $el);
  view.setupBoard();
  view.bindEvents();
});

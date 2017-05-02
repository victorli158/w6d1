class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {

    // use arrow to prevent global this scoping
    $.each($('.cell'), (i, square) => {
      $(square).on("click", (event) => {
        this.makeMove($(square));
      });
    });
  }

  makeMove($square) {

    try {
      const mark = this.game.currentPlayer;
      this.game.playMove($square.data("pos"));
      $square.css("background-color", "white");
      $square.html(mark);
    } catch(err) {
      alert(`Error: ${err.msg}`);
    }

    if (this.game.isOver()) {
      const winner = this.game.winner();
      this.gameOver(winner);
    }
  }

  highlightBoard(winnerMark) {

    $.each($('.cell'), (i, square) => {
      if ($(square).html() === winnerMark) {
        $(square).css("background-color", "green");
        $(square).css("color", "white");
      } else {
        $(square).css("background-color", "white");
        $(square).css("color", "red");
      }
    });
  }

  unbindEvents() {
    $.each($('.cell'), (i, square) => {
      $(square).off("click");
    });
  }

  gameOver(winner) {
    if (winner) {
      $('.ttt').append(`<figcaption>You win, ${winner}!</figcaption>`);
    } else {
      $('.ttt').append(`<figcaption>Cat's game 🐈 !</figcaption>`);
    }
    this.highlightBoard(winner);
    this.unbindEvents();
  }

  setupBoard() {
    let $list = $('<ul class="grid"></ul>');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // let cell = this.game.board.grid[i][j];
        let jCell = $(`<li class="cell"></li>`);
        $list.append(jCell);
        console.log($(jCell).data("pos", [i, j]));
        console.log($(jCell).data("pos"));

      }
    }
    this.$el.append($list);
  }

}

module.exports = View;

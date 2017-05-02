class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {

    // use arrow to prevent global this scoping
    $.each($('.cell'), (i, el) => {
      this.makeMove($(el));
    });
  }

  makeMove($square) {
    $square.on("click", (event) => {
      try {
        const mark = this.game.currentPlayer;
        this.game.playMove($square.data("pos"));
        $square.css("background-color", "white");
        $square.html(mark);
      } catch(err) {
        alert(`Error: ${err.msg}`);
      }
      console.log(this.game.winner());
      if (this.game.isOver()) {
        $('.ttt').append(`<figcaption>You win, ${this.game.winner()}!</figcaption>`);
        $.each($('.cell'), (i, el) => {
          $(el).off("click");
        });
      }
    });
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

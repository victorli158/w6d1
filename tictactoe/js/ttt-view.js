class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {

    // use arrow to prevent global this scoping
    $.each($('.cell'), (i, el) => {
      // console.log($(el));
      $(el).on("click", (event) => {
        // alert(`EVENT: ${event.type} | EL CLICKED: ${i}`);
        console.log(el);
        console.log($(el).data("pos"));
        this.game.playMove($(el).data("pos"));
        $(el).css("background-color", "white");
      });
    });
  }

  makeMove($square) {}

  setupBoard() {
    let $list = $('<ul class="grid"></ul>');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell = this.game.board.grid[i][j];
        let jCell = $(`<li class="cell">${cell}</li>`);
        $list.append(jCell);
        console.log($(jCell).data("pos", [i, j]));
        console.log($(jCell).data("pos"));

      }
    }
    this.$el.append($list);
  }

}

module.exports = View;

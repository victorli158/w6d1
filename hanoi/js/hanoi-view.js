class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    let $view = $("<div></div>");
    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
      let $tower = $("<ul class='tower'></ul>");
      for (let discIdx = 0; discIdx < 3; discIdx++) {
        let $disc;
        if (towerIdx === 0) {
          $disc = $(`<li class='disc'>${discIdx + 1}</li>`);
        } else {
          $disc = $("<li class='disc'></li>");
        }
        $tower.append($disc);
      }
      $view.append($tower);
    }

    this.$el.append($view);
  }

  render() {

  }
}

module.exports = View;

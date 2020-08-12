function StartupScene(game) {
  this._game = game;
  this._pressEnterText = new PressEnterText();

  this._pacman = new Pacman(this, game);
  this._pacman.setStrategy(new PacmanStartupSceneStrategy(this._pacman, this));
  this._pacman.setCurrentSpeed(4);
  this._pacman.setSpeed(4);
  this._pacman.setPosition(new Position(90, 160));
  this._pacman.setDirection(DIRECTION_RIGHT);
}

StartupScene.prototype.keyPressed = function (key) {
  if (key == KEY_ENTER) {
    this._game.setScene(new PlayScene(this._game));
  }
};

StartupScene.prototype.tick = function () {
  this._pressEnterText.tick();
  this._pacman.tick();
};

StartupScene.prototype.draw = function (ctx) {
  this._drawTitle(ctx);
  this._drawControlsHelp(ctx);
  this._pressEnterText.draw(ctx);
  this._pacman.draw(ctx);
};

StartupScene.prototype.getX = function () {
  return 0;
};

StartupScene.prototype.getY = function () {
  return 0;
};

StartupScene.prototype._drawTitle = function (ctx) {
  ctx.fillStyle = "#d0e4f7";
  ctx.font = "bold 56px 'Lucida Console', Monaco, monospace"
  ctx.fillText("NEW MARK", 133, 150);
};

StartupScene.prototype._drawControlsHelp = function (ctx) {
  ctx.fillStyle = "#d0e4f7";
  ctx.font = "bold 14px 'Lucida Console', Monaco, monospace"
  ctx.fillText("CONTROL: ARROW KEYS", 190, 280);
  ctx.fillText("We can help New Mark tune up", 155, 335);
  ctx.fillText("in this pac-man inspired game. To keep the fun going, ", 50, 355);
  ctx.fillText("challenge your friends (over zoom)", 130, 375);
  ctx.fillText("while you stream the song above!", 140, 395);
};

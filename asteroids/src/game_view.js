const Game = require('./game.js');

function GameView (ctx) {
	this.game = new Game();
	this.ctx = ctx;
}

GameView.prototype.start = function () {
	this.bindKeyHandlers();
	setInterval(() => {
		this.game.draw(this.ctx);
		this.game.step();
	}, 20);
};

GameView.prototype.bindKeyHandlers = function () {
	key('a', () => this.game.ship.power([-1, 0]));
	key('s', () => this.game.ship.power([0, 1]));
	key('d', () => this.game.ship.power([1, 0]));
	key('w', () => this.game.ship.power([0, -1]));
};

module.exports = GameView;

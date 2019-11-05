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

	key('left', () => this.game.ship.power([-1, 0]));
	key('down', () => this.game.ship.power([0, 1]));
	key('right', () => this.game.ship.power([1, 0]));
	key('up', () => this.game.ship.power([0, -1]));

	key('space', () => this.game.ship.fireBullet());
};

module.exports = GameView;

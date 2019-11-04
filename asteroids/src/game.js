const Asteroid = require('./asteroid.js');

function Game() {
	this.asteroids = [];
	this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
	for (i = 0; i < Game.NUM_ASTEROIDS; i++) {
		this.asteroids.push(new Asteroid(this.randomPosition()));
	}
};

Game.prototype.randomPosition = function () {
	let rand_x = this.rand_within_dimen(Game.DIM_X);
	let rand_y = this.rand_within_dimen(Game.DIM_Y);
	return [rand_x, rand_y];
};

Game.prototype.rand_within_dimen = function (max) {
	return Math.floor(Math.random() * max);
};

Game.prototype.draw = function (ctx) {
	ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	this.asteroids.forEach(obj => obj.draw(ctx));
}

Game.prototype.moveObjects = function () {
	this.asteroids.forEach(obj => obj.move());
};

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 30;

module.exports = Game;

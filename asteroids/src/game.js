const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

function Game() {
	this.asteroids = [];
	this.addAsteroids();
	this.ship = new Ship(this.randomPosition(), this);
}

Game.prototype.addAsteroids = function () {
	for (i = 0; i < Game.NUM_ASTEROIDS; i++) {
		this.asteroids.push(new Asteroid(this.randomPosition(), this));
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
	this.allObjects().forEach(obj => obj.draw(ctx));
}

Game.prototype.moveObjects = function () {
	this.allObjects().forEach(obj => obj.move());
};

Game.prototype.wrap = function(pos) {
	return [this.wrap_coor(pos[0], Game.DIM_X),
	this.wrap_coor(pos[1], Game.DIM_Y)];
};

Game.prototype.wrap_coor = function(coor, max) {
	if (coor > max) {
		coor -= (max + 1);
	} else if (coor < 0) {
		coor += (max + 1);
	}
	return coor;
};

Game.prototype.checkCollisions = function() {
	let arr = this.allObjects();
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (i === j) {
				continue;
			}
			if (arr[i].isCollidedWith(arr[j])) {
				arr[i].collideWith(arr[j]);
			}
		}
	}
};

Game.prototype.step = function () {
	this.moveObjects();
	this.checkCollisions();
};

Game.prototype.remove = function (asteroid) {
	this.asteroids.forEach((el, i) => {
		if (el == asteroid) {
			this.asteroids.splice(i, 1);
			return;
		}
	});
};

Game.prototype.allObjects = function () {
	return this.asteroids.concat([this.ship]);
};

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 30;

module.exports = Game;

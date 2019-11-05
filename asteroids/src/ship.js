const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
const Bullet = require('./bullet.js');

Util.inherits(Ship, MovingObject);

function Ship(pos, game) {
	MovingObject.call(this, {
		pos: pos,
		game: game,
		vel: [0, 0],
		radius: Ship.RADIUS,
		color: Ship.COLOR
	});
}

Ship.prototype.relocate = function () {
	this.pos = this.game.randomPosition();
	this.vel = [0, 0];
};

Ship.prototype.power = function (impulse) {
	this.vel = [
		this.vel[0] + impulse[0],
		this.vel[1] + impulse[1]
	];
};

Ship.prototype.fireBullet = function () {
	let bullet_vel = [
		this.vel[0] * 3,
		this.vel[1] * 3
	];
	let bullet = new Bullet(this.pos, this.game, bullet_vel);
	this.game.add(bullet);
};

Ship.RADIUS = 5;
Ship.COLOR = 'green';

module.exports = Ship;

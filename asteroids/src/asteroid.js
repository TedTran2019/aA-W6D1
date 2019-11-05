const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos, game) {
	MovingObject.call(this, {
		pos: pos,
		game: game,
		vel: Util.randomVec(Asteroid.SPEED),
		radius: Asteroid.RADIUS,
		color: Asteroid.COLOR
	});
}

Asteroid.prototype.collideWith = function (otherObject) {
	if (otherObject instanceof Ship) {
		otherObject.relocate();
	} else if (otherObject instanceof Bullet) {
		this.game.remove(this);
		this.game.remove(otherObject);
	}
};

Asteroid.COLOR = 'red';
Asteroid.RADIUS = 10;
Asteroid.SPEED = 5;

module.exports = Asteroid;

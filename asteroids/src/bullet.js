const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');
Util.inherits(Bullet, MovingObject);

function Bullet (pos, game, vel) {
	MovingObject.call(this, {
		pos: pos,
		game: game,
		vel: vel,
		radius: Bullet.RADIUS,
		color: Bullet.COLOR
	});
}

Bullet.prototype.isWrappable = false;

Bullet.RADIUS = 2;
Bullet.COLOR = 'blue';

module.exports = Bullet;

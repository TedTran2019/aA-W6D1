const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos) {
	MovingObject.call(this, {
		pos: pos,
		vel: Util.randomVec(Asteroid.SPEED),
		radius: Asteroid.RADIUS,
		color: Asteroid.COLOR
	});
}

Asteroid.COLOR = 'red';
Asteroid.RADIUS = 10;
Asteroid.SPEED = 5;

module.exports = Asteroid;

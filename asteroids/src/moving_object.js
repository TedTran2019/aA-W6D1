function MovingObject(options) {
	this.pos = options.pos;
	this.game = options.game;
	this.vel = options.vel;
	this.radius = options.radius;
	this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.beginPath();

	ctx.arc(
		this.pos[0],
		this.pos[1],
		this.radius,
		0,
		2 * Math.PI
	);

	ctx.fill();
};

MovingObject.prototype.move = function() {
	let new_pos = [
		this.pos[0] + this.vel[0],
		this.pos[1] + this.vel[1]
	];

	if (!this.isWrappable && this.game.isOutOfBounds(new_pos)) {
		this.game.remove(this);
	} else {
		this.pos = this.game.wrap(new_pos);
	}
};

// Collided if distance between center points is less than sum of radii
// Utilizes distance formula
MovingObject.prototype.isCollidedWith = function (otherObject) {
	let radiiSum = this.radius + otherObject.radius;
	let distance_btwn = Math.sqrt(
		Math.pow(otherObject.pos[0] - this.pos[0], 2) +
		Math.pow(otherObject.pos[1] - this.pos[1], 2)
	);
	return distance_btwn < radiiSum;
};

MovingObject.prototype.collideWith = function (otherObject) {
	// this.game.remove(this);
	// this.game.remove(otherObject);
};

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;

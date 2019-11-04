const Util = {
	inherits(child, parent) {
		child.prototype = Object.create(parent.prototype);
		child.prototype.constructor = child;
	},

	randomVec(length) {
		const deg = 2 * Math.PI * Math.random();
		return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	},

	scale(vec, m) {
		return [vec[0] * m, vec[1] * m];
	}
};

module.exports = Util;

var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.add = function(vec) {
	this.x += vec.x;
	this.y += vec.y;
};

Vector.prototype.sub = function(vec) {
	this.x -= vec.x;
	this.y -= vec.y;
};

Vector.prototype.mult = function(scal) {
	this.x *= scal;
	this.y *= scal;
};

Vector.prototype.div = function(scal) {
	this.x /= scal;
	this.y /= scal;
};

var Mass = function(pos, velocity) {
	this.position = pos;
	this.velocity = velocity;
	this.acceleration = Vector(0, -9.81); // default acceleration due to gravity
}
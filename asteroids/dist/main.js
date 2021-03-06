/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(pos, game) {\n\tMovingObject.call(this, {\n\t\tpos: pos,\n\t\tgame: game,\n\t\tvel: Util.randomVec(Asteroid.SPEED),\n\t\tradius: Asteroid.RADIUS,\n\t\tcolor: Asteroid.COLOR\n\t});\n}\n\nAsteroid.prototype.collideWith = function (otherObject) {\n\tif (otherObject instanceof Ship) {\n\t\totherObject.relocate();\n\t} else if (otherObject instanceof Bullet) {\n\t\tthis.game.remove(this);\n\t\tthis.game.remove(otherObject);\n\t}\n};\n\nAsteroid.COLOR = 'red';\nAsteroid.RADIUS = 10;\nAsteroid.SPEED = 5;\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nUtil.inherits(Bullet, MovingObject);\n\nfunction Bullet (pos, game, vel) {\n\tMovingObject.call(this, {\n\t\tpos: pos,\n\t\tgame: game,\n\t\tvel: vel,\n\t\tradius: Bullet.RADIUS,\n\t\tcolor: Bullet.COLOR\n\t});\n}\n\nBullet.prototype.isWrappable = false;\n\nBullet.RADIUS = 2;\nBullet.COLOR = 'blue';\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n\tthis.asteroids = [];\n\tthis.addAsteroids();\n\tthis.ship = new Ship(this.randomPosition(), this);\n\tthis.bullets = [];\n}\n\nGame.prototype.addAsteroids = function () {\n\tfor (i = 0; i < Game.NUM_ASTEROIDS; i++) {\n\t\tthis.asteroids.push(new Asteroid(this.randomPosition(), this));\n\t}\n};\n\nGame.prototype.randomPosition = function () {\n\tlet rand_x = this.rand_within_dimen(Game.DIM_X);\n\tlet rand_y = this.rand_within_dimen(Game.DIM_Y);\n\treturn [rand_x, rand_y];\n};\n\nGame.prototype.rand_within_dimen = function (max) {\n\treturn Math.floor(Math.random() * max);\n};\n\nGame.prototype.draw = function (ctx) {\n\tctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\tthis.allObjects().forEach(obj => obj.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n\tthis.allObjects().forEach(obj => obj.move());\n};\n\nGame.prototype.wrap = function(pos) {\n\treturn [this.wrap_coor(pos[0], Game.DIM_X),\n\tthis.wrap_coor(pos[1], Game.DIM_Y)];\n};\n\nGame.prototype.wrap_coor = function(coor, max) {\n\tif (coor > max) {\n\t\tcoor -= (max + 1);\n\t} else if (coor < 0) {\n\t\tcoor += (max + 1);\n\t}\n\treturn coor;\n};\n\nGame.prototype.checkCollisions = function() {\n\tlet arr = this.allObjects();\n\tfor (i = 0; i < arr.length; i++) {\n\t\tfor (j = 0; j < arr.length; j++) {\n\t\t\tif (i === j) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (arr[i].isCollidedWith(arr[j])) {\n\t\t\t\tarr[i].collideWith(arr[j]);\n\t\t\t}\n\t\t}\n\t}\n};\n\nGame.prototype.step = function () {\n\tthis.moveObjects();\n\tthis.checkCollisions();\n};\n\nGame.prototype.remove = function (obj) {\n\tif (obj instanceof Asteroid) {\n\t\tthis.asteroids.forEach((el, i) => {\n\t\t\tif (el == obj) {\n\t\t\t\tthis.asteroids.splice(i, 1);\n\t\t\t\treturn;\n\t\t\t}\n\t\t});\n\t} else {\n\t\tthis.bullets.forEach((el, i) => {\n\t\t\tif (el == obj) {\n\t\t\t\tthis.bullets.splice(i, 1);\n\t\t\t\treturn;\n\t\t\t}\n\t\t});\n\t}\n};\n\nGame.prototype.allObjects = function () {\n\treturn this.asteroids.concat(this.bullets).concat([this.ship]);\n};\n\nGame.prototype.add = function (obj) {\n\tif (obj instanceof Asteroid) {\n\t\tthis.asteroids.push(obj);\n\t} else {\n\t\tthis.bullets.push(obj);\n\t}\n};\n\nGame.prototype.isOutOfBounds = function (pos) {\n\tlet x = pos[0];\n\tlet y = pos[1];\n\tif (x < 0 || y < 0 || x > Game.DIM_X || y > Game.DIM_Y) {\n\t\treturn true;\n\t}\n\treturn false;\n}\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 1000;\nGame.NUM_ASTEROIDS = 30;\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (ctx) {\n\tthis.game = new Game();\n\tthis.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n\tthis.bindKeyHandlers();\n\tsetInterval(() => {\n\t\tthis.game.draw(this.ctx);\n\t\tthis.game.step();\n\t}, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function () {\n\tkey('a', () => this.game.ship.power([-1, 0]));\n\tkey('s', () => this.game.ship.power([0, 1]));\n\tkey('d', () => this.game.ship.power([1, 0]));\n\tkey('w', () => this.game.ship.power([0, -1]));\n\n\tkey('left', () => this.game.ship.power([-1, 0]));\n\tkey('down', () => this.game.ship.power([0, 1]));\n\tkey('right', () => this.game.ship.power([1, 0]));\n\tkey('up', () => this.game.ship.power([0, -1]));\n\n\tkey('space', () => this.game.ship.fireBullet());\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", event => {\n\tcanvas = document.getElementById('game-canvas');\n\tctx = canvas.getContext(\"2d\");\n\tlet gv = new GameView(ctx);\n\tgv.start();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n\tthis.pos = options.pos;\n\tthis.game = options.game;\n\tthis.vel = options.vel;\n\tthis.radius = options.radius;\n\tthis.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n\tctx.fillStyle = this.color;\n\tctx.beginPath();\n\n\tctx.arc(\n\t\tthis.pos[0],\n\t\tthis.pos[1],\n\t\tthis.radius,\n\t\t0,\n\t\t2 * Math.PI\n\t);\n\n\tctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n\tlet new_pos = [\n\t\tthis.pos[0] + this.vel[0],\n\t\tthis.pos[1] + this.vel[1]\n\t];\n\n\tif (!this.isWrappable && this.game.isOutOfBounds(new_pos)) {\n\t\tthis.game.remove(this);\n\t} else {\n\t\tthis.pos = this.game.wrap(new_pos);\n\t}\n};\n\n// Collided if distance between center points is less than sum of radii\n// Utilizes distance formula\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n\tlet radiiSum = this.radius + otherObject.radius;\n\tlet distance_btwn = Math.sqrt(\n\t\tMath.pow(otherObject.pos[0] - this.pos[0], 2) +\n\t\tMath.pow(otherObject.pos[1] - this.pos[1], 2)\n\t);\n\treturn distance_btwn < radiiSum;\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {\n\t// this.game.remove(this);\n\t// this.game.remove(otherObject);\n};\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship(pos, game) {\n\tMovingObject.call(this, {\n\t\tpos: pos,\n\t\tgame: game,\n\t\tvel: [0, 0],\n\t\tradius: Ship.RADIUS,\n\t\tcolor: Ship.COLOR\n\t});\n}\n\nShip.prototype.relocate = function () {\n\tthis.pos = this.game.randomPosition();\n\tthis.vel = [0, 0];\n};\n\nShip.prototype.power = function (impulse) {\n\tthis.vel = [\n\t\tthis.vel[0] + impulse[0],\n\t\tthis.vel[1] + impulse[1]\n\t];\n};\n\nShip.prototype.fireBullet = function () {\n\tlet bullet_vel = [\n\t\tthis.vel[0] * 3,\n\t\tthis.vel[1] * 3\n\t];\n\tlet bullet = new Bullet(this.pos, this.game, bullet_vel);\n\tthis.game.add(bullet);\n};\n\nShip.RADIUS = 5;\nShip.COLOR = 'green';\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\tinherits(child, parent) {\n\t\tchild.prototype = Object.create(parent.prototype);\n\t\tchild.prototype.constructor = child;\n\t},\n\n\trandomVec(length) {\n\t\tconst deg = 2 * Math.PI * Math.random();\n\t\treturn Util.scale([Math.sin(deg), Math.cos(deg)], length);\n\t},\n\n\tscale(vec, m) {\n\t\treturn [vec[0] * m, vec[1] * m];\n\t}\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
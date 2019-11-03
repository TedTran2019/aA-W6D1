function sum(...args) {
	return args.reduce((accu, ele) => {
		return accu += ele;
	});
}
console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function (context, ...bindArgs) {
	return (...callArgs) => {
		return this.apply(context, bindArgs.concat(callArgs));
	};
}

class Cat {
	constructor(name) {
		this.name = name;
	}

	says(sound, person) {
		console.log(`${this.name} says ${sound} to ${person}!`);
		return true;
	}
}

class Dog {
	constructor(name) {
		this.name = name;
	}
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
	const numbers = [];
	const _curriedSum = nbr => {
		numbers.push(nbr);
		if (numbers.length === numArgs) {
			return numbers.reduce((accu, el) => {
				return accu += el;
			});
		} else {
			return _curriedSum;
		}
	};
	return _curriedSum;
}
const currySum = curriedSum(4);
console.log(currySum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
	const args = [];
	const _curry = arg => {
		args.push(arg);
		if (args.length === numArgs) {
			// return this.apply(null, args);
			return this(...args);
		} else {
			return _curry;
		}
	};
	return _curry;
};

const sumCurry = sum.curry(4);
console.log(sumCurry(5)(30)(20)(1));

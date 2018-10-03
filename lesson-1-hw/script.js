
//Добавить переменную кофе (зерна)
// ввести проверку на пустую кофеварку
// реализовать зависимость от количества кофе
//реализовать метод стоп
function CoffeeMachine(power) {
	let waterAmount = 0;
	let waterHeatCapacity = 4200;
	let maxTemp = 90;
	let coffeeAmount = 0;
	let timer;

// определение времени приготовления кофе
	const getBoilTime = function () {
		return Math.round((waterAmount * waterHeatCapacity * maxTemp*coffeeAmount) / (power * 50))
	};

// проверка наличия воды в кофемашине
	const checkWater = function () {
		return waterAmount > 0
	}

// проверка наличия кофе в кофемашине
	const checkCoffee = function () {
		return coffeeAmount > 20;
	};

// добавление кофе в кофемашину
	this.fillCoffee = function (newCoffeeAmount) {
			if (newCoffeeAmount >= 0 && (coffeeAmount + newCoffeeAmount) >= 20) {
				coffeeAmount += newCoffeeAmount;
			} else {
				coffeeAmount += newCoffeeAmount;
				console.error('Недостаточно кофе в кофе машине');
				return
			}
	};
// добавление воды в кофемашину
	this.fill = function (newAmount) {
		if (newAmount >= 50) {
		waterAmount = newAmount;
		} else {
			console.error('Слишком мало воды');
		}
	};

// приготовление кофе
	this.launch = function () {
		if (!checkWater()) {
			console.error('Налейте воды!');
			return
		}
		if (!checkCoffee()) {
			console.error('Добавьте кофе!');
			return
		}
		const boilTime = getBoilTime ();
		console.info(`Время приготовления вашего кофе в количестве ${coffeeAmount} грамм составит ${boilTime} мс `);
		timer = setTimeout(function () {
			console.log('Ваш кофе готов!')
		}, boilTime);
	};
// метод остановки приготовления кофе
	this.stop = function () {
		clearTimeout(timer);
		console.log('Приготовление кофе остановлено!');
	}
}

const vitek = new CoffeeMachine(2000);
vitek.fill(50);
vitek.fillCoffee(25);
vitek.launch();
setTimeout(vitek.stop(), 3000);

const polaris = new CoffeeMachine(4000);
polaris.fill(80);
polaris.fillCoffee(50);
polaris.launch();

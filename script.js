
//Добавить переменную кофе (зерна)
// ввести проверку на пустую кофеварку
// реализовать зависимость от количества кофе
//реализовать метод стоп
function CoffeeMachine(power) {
	let waterAmount = 0;
	let waterHeatCapacity = 4200;
	let maxTemp = 90;

	const getBoilTime = function () {
		return (waterAmount * waterHeatCapacity * maxTemp) / power
	};

	const checkWater = function () {
		return waterAmount > 0
	}

	this.fill = function (newAmount) {
		if (newAmount >= 50) {
		waterAmount = newAmount;
		} else {
			console.error('Слишком мало воды');
		}
	};


	this.launch = function () {
		if (!checkWater()) {
			console.error('Налейте воды!');
			return
		}
		const boilTime = getBoilTime ();
		console.info(`Время приготовления: ${boilTime}`);
		setTimeout(function () {
			console.log('Ваш кофе готов!')
		}, boilTime);
	};
}

const vitek = new CoffeeMachine(2000);
vitek.fill(70);
vitek.launch();

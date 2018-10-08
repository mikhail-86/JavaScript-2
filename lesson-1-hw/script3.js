'use strict';
function Hamburger (size, stuffing) {
    this.size = size;
    this.stuffing = [stuffing];
    this.topping = [];
    this.addStuffing = function (newStuffing) {
        for (let i = 0; i < this.stuffing.length; i++) {
            if (newStuffing === this.stuffing[i]) {
                console.error('Такая начинка уже есть!');
                return
            } 
        }
        this.stuffing.push(newStuffing);
    };
    this.removeStuffing = function (deletedStuffing) {
        for (let i = 0; i < this.stuffing.length; i++) {
            if (this.stuffing[i] === deletedStuffing) {
                this.stuffing.splice(i,1);
            }
        }
    };
    this.addTopping = function (newTopping) {
        for (let i = 0; i < this.topping.length; i++) {
            if (newTopping === this.topping[i]) {
                console.error('Такая добавка уже есть!');
                return
            } 
        }
        this.topping.push(newTopping);
    };
    this.removeTopping = function (deletedTopping) {
        for (let i = 0; i < this.topping.length; i++) {
            if (this.topping[i] === deletedTopping) {
                this.topping.splice(i,1);
            }
        }
    };
    this.calculatePrice = function () {
        var result = 0;
		if (this.size === 'small') {
            result +=50;
        } else if (size == 'large') {
            result += 100;
        } else {
            console.error('Размер задан не верно!');
            return
        }
		
        for (let i = 0; i < this.stuffing.length; i++) {
            if (this.stuffing[i] === 'cheese') {
                result += 10;
            }   else if (this.stuffing[i] === 'salad') {
                result += 20;
            }   else if (this.stuffing[i] === 'potato') {
                result += 15;
            }   else {
                console.error('Данной начинки нет в ассортименте!');
                return
            }
        }
        
        for (let i = 0; i < this.topping.length; i++) {
            if (this.topping[i] === 'mayo') {
                result += 20;
            }   else if (this.topping[i] === 'flavouring') {
                result += 15;
            }   else  {
                console.error('Данной добавки нет в ассортименте!');
                return
            }
        }
        
		return result;
	};
    this.calculateCalories = function () {
        var result = 0;
		if (this.size === 'small') {
            result +=20;
        } else if (size == 'large') {
            result += 40;
        } else {
            console.error('Размер задан не верно!');
            return
        }
		
        for (let i = 0; i < this.stuffing.length; i++) {
            if (this.stuffing[i] === 'cheese') {
                result += 20;
            }   else if (this.stuffing[i] === 'salad') {
                result += 5;
            }   else if (this.stuffing[i] === 'potato') {
                result += 10;
            }   else {
                console.error('Данной начинки нет в ассортименте!');
                return
            }
        }
        
        for (let i = 0; i < this.topping.length; i++) {
            if (this.topping[i] === 'mayo') {
                result += 5;
            }   else if (this.topping[i] === 'flavouring') {
                result += 0;
            }   else  {
                console.error('Данной добавки нет в ассортименте!');
                return
            }
        }
        
		return result;
    }
};


let Ham1 = new Hamburger('small', 'cheese');

Ham1.addStuffing('potato');
Ham1.addStuffing('salad');
//console.log(Ham1.stuffing);
Ham1.removeStuffing('salad');
//console.log(Ham1.stuffing);
Ham1.addTopping('mayo');
//console.log(Ham1.topping);
Ham1.removeTopping('mayo');
//console.log(Ham1.topping);
Ham1.addTopping('flavouring');
Ham1.removeTopping('flavouring');
Ham1.addTopping('mayo');
//console.log(Ham1.topping);
console.log('Цена гамбургера составит: ' + Ham1.calculatePrice() + ' рублей.');
console.log('Количество калорий составит: ' + Ham1.calculateCalories() + ' калорий.');


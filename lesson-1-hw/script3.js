'use strict';
function Hamburger (size, stuffing) {
    this.size = size;
    this.stuffing = [stuffing];
    this.toppings = [];
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
    }
}

let Ham1 = new Hamburger('small', 'cheese');
console.log(Ham1.stuffing);
Ham1.addStuffing('potato');
console.log(Ham1.stuffing);
Ham1.addStuffing('salad');
console.log(Ham1.stuffing);
Ham1.removeStuffing('salad');
console.log(Ham1.stuffing);
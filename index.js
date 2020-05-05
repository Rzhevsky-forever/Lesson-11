'use strict';

// Задание 1

const clientsModule = require('./clients.js');

const clients = clientsModule.getClients();

function findByName(name) {
    let result = false;
    let customers = this;
    Object.getOwnPropertyNames(customers).forEach(function(customer) {
        if(customers[customer].name === name) {
            result = customers[customer];
        }
    });
    return result;
}

clients.findByName = findByName;

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email);


// Задание 2

/**
* Сравниеват сумму покупок клиентов
*
* @var left client Obj
* @var right client Obj
* @return Number
*/
function compareByTotalSumm(left, right) {
	/**
	* inner function for calculate sum price of are buys
	*
	* @var sumOfPrices - accamulytor
	* @var priceOfBuy - each value of array
	*/
	const calkSummPrices = (sumOfPrices, priceOfBuy) => sumOfPrices + priceOfBuy;

	const sumLeft = left.orders.reduce(calkSummPrices);
	const sumRight = right.orders.reduce(calkSummPrices);


	if (sumRight > sumLeft) {
	    return 1;
	}
	if (sumRight < sumLeft) {
    	return -1;
	}
	return 0;
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
'use strict';

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

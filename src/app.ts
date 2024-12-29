// Code goes here!
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

import { Product } from './product.model'


const loadedProducts = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
]

const products = plainToInstance(Product, loadedProducts)
console.log(products);

console.log(products[0] instanceof Product);

const p_1 = new Product('A book', -12.99)
console.log(p_1);

validate(p_1).then(err => {
    if (err.length > 0)
        err.forEach(i => console.log(i.constraints))
    else
        console.log(p_1.getInformation())
})





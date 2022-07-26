import {Circulo} from './js/circulo.js';
import {Rectangulo} from './js/rectangulo.js';

var circulo = new Circulo(10,20,55);
var rectangulo = new Rectangulo(5,10);

console.log("Circ-> "+circulo.toString());
console.log("Área circ-> "+circulo.area());

console.log("Rect-> "+rectangulo.toString());
console.log("Área rect-> "+rectangulo.area());
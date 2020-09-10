import '../js/wx';
import { settings, trim } from './utils';
import { hello } from './promise';

let set = settings();
console.log(set);

//const
const a = 1;

async function getHello() {
  let hey = await hello();
  console.log(hey);
}

getHello();

//class
class Person {
  sayHello() {
    console.log('支持class');
  }
}

let person = new Person();
person.sayHello();

import _ from "lodash";
import getType from "./getType.js";
import getRandom from "./getRandom.js";

console.log(_.camelCase("the hello world"));
console.log(getType([1, 2, 3]));
console.log(getRandom(), getRandom());

const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(obj);

const str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(str));
console.log(JSON.stringify(str));

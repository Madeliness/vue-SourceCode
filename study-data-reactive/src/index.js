import defineReactive from "./defineReactive.js";
import Observer from "./Observer.js";
import { observe } from "./observe.js";
// import {array} from './array' 
var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    c: {
        d: {
            f: 10
        }
    },
    g: [1, 33, 44]
};

observe(obj)
// obj.b++
obj.g.splice(2, 1, [88, 99])
obj.g[3] = 77
console.log(obj.g)
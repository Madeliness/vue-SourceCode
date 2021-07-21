// import defineReactive from "./defineReactive.js";
// import Observer from "./Observer.js";
import { observe } from "./observe.js";
import Watcher from "./Watcher.js";
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
new Watcher(obj, 'a.m.n', (val) => {
    console.log('★我是Watcher，我在监听a.m.n', val)
})
obj.a.m.n = 88;
// obj.g.push(99)
console.log('obj', obj)

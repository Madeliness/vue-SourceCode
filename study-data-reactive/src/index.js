import defineReactive from "./defineReactive.js";
import Observer from "./Observer.js";
import { observe } from "./observe.js";
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
    }
};

observe(obj)
obj.b++
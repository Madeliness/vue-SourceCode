import {def} from './utils.js'
import defineReactive from './defineReactive.js'
export default class Observer {
    constructor(value) {
        // 给市里（this，构造函数中的this不是表示类本身，而是表示实例）
        def(value, '__ob__', this, false)
        console.log('我是Observer构造器', value)
        // Observer 类的目的：将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
        this.walk(value)
    }
    // 遍历
    walk(value) {
        for (let k in value) {
            defineReactive(value, k)
        }
    }
}
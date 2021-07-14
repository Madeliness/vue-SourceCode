import { def} from './utils.js';

const arrayPrototype = Array.prototype;

// 以Array.prototype为原型创建arrayMethods对象
// 暴露arrayMethods
export const arrayMethods = Object.create(arrayPrototype)
console.log(arrayMethods)

// 要被改写的七个数组方法
const methodsNeedChange = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
methodsNeedChange.forEach((methodName) => {
    console.log('methodName', methodName)
    // 备份原来的方法, 因为push，pop等7个函数的功能不能被剥夺
    const original = arrayPrototype[methodName];
    // 把这个数组身上的__ob__取出来，__ob__已经被添加了，因为数组肯定不是最高层，比如obj.g属性是数组，obj不能是数组，第一次遍历obj这个对象的第一层的时候，已经给g属性（就是这个数组）添加了__ob__属性
    // 定义新的方法
    def(arrayMethods, methodName, function(){
        // 恢复原来的功能
        const result =  original.apply(this, arguments);
        // 把类数组对象变成数组
        const args = [...arguments];
        console.log(arguments);
        const ob = this.__ob__;
        // 有三种方法push/unshift/splice能够插入新项，现在要把插入的新项也要变为observe的
        let inserted = [];
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                // splice 格式是splice（下标，数量，插入的新项）
                inserted = args.slice(2)
                break;
        }
        // 判断有没有要插入的新项，让新项也变成响应式的
        if (inserted) {
            ob.observeArray(inserted)
        }
        console.log('lalala')
        
        return result;
    }, false)
})
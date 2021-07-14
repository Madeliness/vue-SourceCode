import vnode from './vnode.js';

/**  低配版本的h函数，这个函数必须接收3个参数，缺一不可
* 相当于它的重载功能较弱
* 也就是说，调用的时候形态必须是以下三种之一：
* 形态①：h('div', {}, '文字')
* 形态二：h('div', {}, [])
* 形态三：h('div', {}, h())
*/
export default function(sel, data, c) {
    // 检查参数的个数
    if (arguments.length !== 3) {
        throw new Error('h函数必须传入3个参数，低配版h函数');
    }
    // 检查参数c的类型
    if (typeof c === 'string' || typeof c === 'number') {
        // 说明现在调用h函数就是形态①
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 说明现在调用H函数就是形态②
        let children = []
        // 遍历c，收集children
        for (let i = 0; i < c.length; i++) {
            // c[i] 必须是一个对象，如果不满足
            if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
                throw new Error('传入的数组参数中有项不是h函数')
            }
            // 这里不用执行c[i]，因为测试语句中已经调用了，既是执行h函数了
            //此时只需要收集好就可以了
            children.push(c[i])
        }
        return vnode(sel, data,children, undefined, undefined)
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        // 说明是调用h函数形态③
        // 即传入的c是唯一的孩子，直接存入children
        let children = [c];
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的第三个参数类型不对')
    }
}

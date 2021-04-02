/**
 * 功能是可以在dataObj对象中，寻找用连续点符号的keyName属性，比如，dataObj 是
 * {
 *  a: {
 *      b: {
 *        c: 100
 *      }
 *  }
 * }
 * 那么lookup(dataObj, 'a.b.b') 结果就是100
*/
export default function lookup(dataObj, keyName) {
    // 看看keyName 中有没有点符号
    if (keyName.indexOf('.') > -1 && keyName !== '.') {
        var keys = keyName.split('.');
        // 设置一个临时变量，这个临时变量用于周转，一层一层找下去
        var temp = dataObj;
        for (let i = 0; i < keys.length; i++) {
            // 每找一层，都把它设为新的临时变量
            temp = temp[keys[i]]
        }
        return temp;
    }
    // 如果没有点符号
    return dataObj[keyName];
}
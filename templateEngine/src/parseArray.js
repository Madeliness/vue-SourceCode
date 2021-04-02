import lookup from './lookup.js'
import renderTemplate from './renderTemplate.js';
/**
 * 处理数组，结合renderTemplate实现递归
 * 这个函数收的参数是token!而不是tokens!
 * token 就是一个简单的['#', 'student', []]
 * 这个函数要递归调用renderTemplate函数，调用多少次由data决定
 * 比如data的形式是这样的：
 * {
        students: [
            {name: '小明', age: 12, hobbies: ['游泳', '羽毛球']},
            {name: '小红', hobbies: ['足球', '篮球', '羽毛球']}
        ]
    }
    那么parseArray()函数就要递归调用renderTemplate()三次，数组长度是3
*/
export default function parseArray(token, data) {
    // 得到整体数据data中这个数组要使用的部分
    var v = lookup(data, token[1]);
    // 结果字符串
    var resultStr = '';
    // 注意，下面这个循环可能是整个包中最难思考的一个循环
    // 它是遍历数据，而不是遍历tokens
    for (let i = 0; i < v.length; i++) {
        // 这里需要补一个“.”属性
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })
    }
    return resultStr;
}
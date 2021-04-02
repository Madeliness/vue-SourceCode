import h from './mysnabbdom/h.js';

let nh = h(
    'div', {a: 1}, 
    [
        h('p', {b: 2}, '嘻嘻'), 
        h('p', {b: 3}, '哈哈'), 
        h('p', {b: 4}, 
        [
            h('span', {}, '大笑'), 
            h('span', {}, '微笑')
        ])
    ]
)
console.log(nh)
import h from './mysnabbdom/h';
import patch from './mysnabbdom/patch'

const container = document.getElementById('container');
const btn = document.getElementById('btn')
const myVnode1 = h('ul', {}, [
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C'),
    h('li', {}, 'D')
]);

patch(container, myVnode1)

const myVnode2 = h('section', {}, [
    h('p', {}, 'haha'),
    h('p', {}, 'hehe')
])

btn.onclick = function () {
    patch(myVnode1, myVnode2)
}
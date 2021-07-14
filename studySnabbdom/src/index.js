import h from './mysnabbdom/h';
import patch from './mysnabbdom/patch'

const container = document.getElementById('container');
const btn = document.getElementById('btn')
const myVnode1 = h('ul', {}, [
    h('li', {key: 'A'}, 'A'),
    h('li', {key: 'B'}, 'B'),
    h('li', {key: 'C'}, 'C'),
    h('li', {key: 'D'}, 'D'),
    h('li', {key: 'E'}, 'E')
]);

patch(container, myVnode1)

const myVnode2 = h('ul', {}, [
    h('li', {key: 'A'}, 'A'),
    h('li', {key: 'B'}, 'B'),
    h('li', {key: 'E'}, 'E')
]);

btn.onclick = function () {
    patch(myVnode1, myVnode2)
}
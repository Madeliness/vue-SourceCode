import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVnode'

export default function (oldVnode, newVnode) {
    // 判断传入的第一个参数，是dom节点还是虚拟节点
    if (oldVnode.sel === '' || oldVnode.sel == undefined) {
        // 传入的第一个参数是dom节点，此时要包装为虚拟节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    console.log(oldVnode)

    // 判断oldv和newv是不是同一个节点
    if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
        // 是则进行精细化比较
        patchVnode(oldVnode, newVnode)
    } else {
        // 不是，则暴力插入新的，删除旧的
        console.log('新老节点不是一个，则暴力插入新的，删除旧的')
        // 插入位置：老节点之前
        let newVnodeElm = createElement(newVnode)
        // 插入到老节点之前
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }
        // 删除旧的节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}
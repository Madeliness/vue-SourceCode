/**
 * 真正创建节点,将vnode创建为dom,插入到pivot之前
*/
export default function createElement (vnode) {
    // console.log('目的是把虚拟节点', vnode, '真正变为dom');
    let domNode = document.createElement(vnode.sel);
    // 有子节点还是文本
    // 创建一个节点，这个节点现在还是孤儿节点
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length === 0)) {
        // 它内部是文字
        domNode.innerText = vnode.text

    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // 它内部是子节点，需要递归创建节点
        for (let i = 0; i < vnode.children.length; i++) {
            // 得到当前这个children
            let ch = vnode.children[i];
            // console.log(ch)
            // 创建出它的dom，一旦调用createElement意味着：创建出DOM了，并且它的elm属性指向了创建出的DOM，但是还没有上树，是一个孤儿节点
            let chDOM = createElement(ch)
            domNode.appendChild(chDOM)
        }
        // vnode.elm = domNode
    }
    // 补充elm属性
    vnode.elm = domNode
    // 返回elm，elm是一个纯dom
    return vnode.elm;
}
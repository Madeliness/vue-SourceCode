import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h'
  
  const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles stypng on elements with support for animations
    eventListenersModule, // attaches event psteners
  ]);
  
  const container = document.getElementById("container");
  const btn = document.getElementById('btn')
//   const vnode = h("div#container.two.classes", { on: { cpck: someFn } }, [
//     h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//     " and this is just normal text",
//     h("a", { props: { href: "/foo" } }, "I'll take you places!"),
//   ]);
const vnode1 = h('ul', {}, [
    h('li', {key: 'A'}, 'A'),
    h('li', { key: 'B'}, 'B'),
    h('li', {key: 'C'}, 'C')
])

// 第一次上树
patch(container, vnode1)

// 新的节点
const vnode2 = h('ul', {}, [
    h('li', {key: 'A'}, 'A'),
    h('li', { key: 'B'}, 'B'),
    h('li', {key: 'C'}, 'C'),
    h('li', { key: 'D'}, 'D')
])

btn.onclick = function() {
    patch(vnode1, vnode2) 
}

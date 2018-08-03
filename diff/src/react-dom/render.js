import { setAttribute } from './dom.js'

/**
 * 将虚拟DOM变真实DOM
 * @param vnode 虚拟DOM, 
 * @return 返回DOM
 */

function _render(vnode) {
    // 1. 递归 将节点转成DOM, 子节点递归, 出口
    // 2. 节点类型 三种: 
    // 文本节点，return createTextNode()
    // 标签节点, createElement attrs children设置 (递归_render)
    // Component render(return jsx)
    if(vnode === undefined || vnode === null || typeof vnode === 'boolean') {
        vnode = ''
    }
    if (typeof vnode === 'string') {
        let textNode = document.createTextNode(vnode)
        return textNode
    }
    
    const dom  = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key]
            setAttribute(dom, key, value)
        })
    }

    if(vnode.children) {
        vnode.children.forEach(child => render(child, dom))
    }
    return dom
}

export function render(vnode, container) {
    // console.log(vnode, container)
    return container.appendChild(_render(vnode));
}

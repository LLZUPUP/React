const React = {
  createElement
}

function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}



const ReactDOM = {
  render: (vnode,container)=>{
    return render(vnode, container)
  }
}
function render(vnode,container) {
  console.log(vnode)
  if(typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(vnode, container)
  }
  if(vnode.attr) {
    Object.keys(vnode.attrs).forEach(key => {
      if(key === 'className') key = 'class'
      dom.setAttribute(key, vnode.attr[key])
    })
  }
  const dom = document.createElement(vndoe.tag)
  vnode.children.forEach(child => render(child, dom))
  render()
}
const element = (
  <div>
    hello <span>world</span>
  </div>
)

ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.appendChild('root')
)
console.log(element)
function createELement(tag, attrs, ...children) {
  // console.log(tag, attrs, children)
  attrs = attrs || {}
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
}

export default createELement
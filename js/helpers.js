function createNewElement (cfg) {
  const {
    on,
    attr,
    props,
    tagName
  } = cfg
  if (!tagName) {
    return null
  }
  const el = document.createElement(tagName)

  // set properties
  if (props) {
    const properties = Object.keys(props)
    properties.forEach(function (key) {
      el[key] = props[key]
    })
  }
  // set attribute
  if (attr) {
    const attribute = Object.keys(attr)
    attribute.forEach(function (key) {
      el.setAttribute(key, attr[key])
    })
  }

  // add event
  if (on) {
    const evt = Object.keys(on)
    evt.forEach(function (key) {
      el.addEventListener(key, on[key])
    })
  }
  return el
}
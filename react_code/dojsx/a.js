"use strict";

var React = {
  createElement: createElement
};

function createElement(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
}

var element = React.createElement(
  "div",
  null,
  "hello ",
  React.createElement(
    "span",
    null,
    "world"
  )
);

console.log(element);

// A general utility method for outputting components to the DOM

export default (element, components) => {
  const $container = $(`#${element}`)
  // holy cow! $.append() can take an array of DOM components as an argument and it will automagically loop over them and add them all
  $container.empty().append(components)
}

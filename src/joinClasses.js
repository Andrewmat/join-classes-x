function joinClasses(stylesModule, ...classes) {
  if (typeof stylesModule !== 'object') throw new Error('A style module should be specified, or you should use joinClasses.only function');
  return classes.map(c => stylesModule[c]).join(' ');
}

joinClasses.withStyle = function(stylesModule) {
  if (typeof stylesModule !== 'object') throw new Error('A style module should be specified, or you should use joinClasses.only function');
  return joinClasses.bind(this, stylesModule);
}

joinClasses.only = function(...classes) {
  return classes.join(' ');
}

module.exports = joinClasses;
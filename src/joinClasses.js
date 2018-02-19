function joinClasses(stylesModule, ...classes) {
  checkStylesModule(stylesModule);
  return classes.map(c => stylesModule[c]).join(' ');
}

joinClasses.withStyle = function(stylesModule) {
  checkStylesModule(stylesModule);
  return joinClasses.bind(this, stylesModule);
}

joinClasses.only = function(...classes) {
  return classes.join(' ');
}

function checkStylesModule(stylesModule) {
  if (typeof stylesModule !== 'object')
    throw new Error('A style module should be specified. You may want to use joinClasses.only');
}

module.exports = joinClasses;
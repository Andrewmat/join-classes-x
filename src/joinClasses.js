
function joinClasses(...classes) {
  return (classes || []).join(' ');
}

joinClasses.withStyle = (stylesModule) => {
  checkStylesModule(stylesModule);
  return (...classes) => {
    return classes.map(c => stylesModule[c]).join(' ');
  }
}

function checkStylesModule(stylesModule) {
  if (typeof stylesModule !== 'object') {
    throw new Error('A style module should be specified. You may want to use joinClasses.only');
  }
}

module.exports = joinClasses;
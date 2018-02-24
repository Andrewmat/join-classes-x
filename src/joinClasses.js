/**
 * Joins multiple classes with space as separator
 * 
 * @param {string[]} classes classes to be joined
 * @returns {string} joined classes
 */
function joinClasses(...classes) {
  return (classes || []).join(' ');
}

/**
 * Attaches a style module to improve code legibility
 * 
 * @param {any} stylesModule object of module containing classes
 * @returns {Function} a joinClasses function with binded styles module
 */
function joinClassesWithStyle(stylesModule) {
  checkStylesModule(stylesModule);
  return (...classes) => {
    return classes.map(c => stylesModule[c]).join(' ');
  };
}

joinClasses.withStyle = joinClassesWithStyle;

function checkStylesModule(stylesModule) {
  if (typeof stylesModule !== 'object') {
    throw new Error('A style module should be specified');
  }
}

module.exports = joinClasses;
const joinClasses = require('../src/joinClasses');

const styleModule = {
  'first': 'module__first',
  'second': 'module__second'
};

describe('joinClasses', () => {

  it('No arguments', () => {
    expect(joinClasses()).toBe('');
  });
  it('One string', () => {
    expect(joinClasses('first')).toBe('first');
  });
  it('Two strings', () => {
    expect(joinClasses('first', 'second')).toBe('first second');
  });

  describe('#withStyle', () => {

    it('No module', () => {
      expect(() => {
        joinClasses.withStyle();
      }).toThrow(Error);
    });

    it('Only module', () => {
      expect(joinClasses.withStyle(styleModule)())
        .toBe('');
    });

    it('Module + one string', () => {
      expect(joinClasses.withStyle(styleModule)('first'))
        .toBe('module__first');
    });

    it('Module + two strings', () => {
      expect(joinClasses.withStyle(styleModule)('first', 'second'))
        .toBe('module__first module__second')
    });
  })
});
const joinClasses = require('../src/joinClasses');

const styleModule = {
  'first': 'module__first',
  'second': 'module__second'
};

describe('joinClasses', () => {
  it('No Module', () => {
    expect(() => {
      joinClasses('first', 'second');
    }).toThrow(Error);
  });
  it('Only Module', () => {
    expect(joinClasses(styleModule)).toBe('');
  });
  it('Module + One string', () => {
    expect(joinClasses(styleModule, 'first')).toBe('module__first');
  });
  it('Module + Two strings', () => {
    expect(joinClasses(styleModule, 'first', 'second')).toBe('module__first module__second');
  });

  describe('#withStyle', () => {
    it('No module', () => {
      expect(() => {
        joinClasses.withStyle();
      }).toThrow(Error);
    });

    describe('(module)', () => {
      let classes;
      beforeAll(() => {
        classes = joinClasses.withStyle(styleModule);
      });

      it('No arguments', () => {
        expect(classes()).toBe('');
      });
      it('One string', () => {
        expect(classes('first')).toBe('module__first');
      });
      it('Two strings', () => {
        expect(classes('first', 'second')).toBe('module__first module__second');
      });
    });
  })

  describe('#only', () => {
    it('No arguments', () => {
      expect(joinClasses.only()).toBe('');
    });
    it('One string', () => {
      expect(joinClasses.only('first')).toBe('first');
    });
    it('Two strings', () => {
      expect(joinClasses.only('first', 'second')).toBe('first second')
    });
  })
});
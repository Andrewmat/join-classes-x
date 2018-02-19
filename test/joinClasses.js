const joinClasses = require('../src/joinClasses');
const assert = require('assert');

const styleModule = {
  'first': 'module__first',
  'second': 'module__second'
};

describe('joinClasses', () => {

  it('No Module', () => {
    assert.throws(() => {
      joinClasses('first', 'second');
    }, Error);
  });

  it('Only Module', () => {
    assert.equal(joinClasses(styleModule), '');
  });

  it('Module + One string', () => {
    assert.equal(joinClasses(styleModule, 'first'), 'module__first');
  });

  it('Module + Two strings', () => {
    assert.equal(joinClasses(styleModule, 'first', 'second'), 'module__first module__second');
  });

  describe('#withStyle', () => {
    it('No module', () => {
      assert.throws(() => {
        joinClasses.withStyle();
      }, Error);
    });

    describe('(module)', () => {
      let classes;
      before(() => {
        classes = joinClasses.withStyle(styleModule);
      });

      it('No arguments', () => {
        assert.equal(classes(), '');
      })
      it('One string', () => {
        assert.equal(classes('first'), 'module__first');
      })
      it('Two strings', () => {
        assert.equal(classes('first', 'second'), 'module__first module__second');
      })
    });
  })

  describe('#only', () => {
    it('No arguments', () => {
      assert.equal(joinClasses.only(), '');
    });
    it('One string', () => {
      assert.equal(joinClasses.only('first'), 'first');
    });
    it('Two strings', () => {
      assert.equal(joinClasses.only('first', 'second'), 'first second');
    });
  })
});
# join-classes-x

Simple functions to ease the process of joining classes in jsx and tsx files.

## Usage

This module contains currently 2 functions:
* `joinClasses()`
* `joinClasses.withModule()`

### joinClasses()

`joinClasses` simply joins multiple classes with space as separator

```jsx
const joinClasses = require('join-classes-x');

// ...

<Component className={joinClasses('input', 'input-disabled')}/>  // -> 'input input-disabled'
```

### joinClasses.withStyle(style)

`joinClasses.withStyle()` attaches a style module to improve code legibility. It

```jsx
const joinClasses = require('join-classes-x');
const styles = require('./style.scss');

const classes = joinClasses.withStyle(styles);

// ...

<Component className={classes('button', 'button-primary')}/>   // -> 'component__button component__button-primary'
<Component className={classes('button', 'button-secondary')}/> // -> 'component__button component__button-secondary'
<Component className={classes('button', 'button-disabled')}/>  // -> 'component__button component__button-disabled'
```

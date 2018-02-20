# join-classes-x

Simple functions to ease the process of joining classes in jsx and tsx files.

## Usage

### joinClasses

It can be used as a simple string join with space as separator

```jsx
const joinClasses = require('join-classes-x');

// ...

<Component className={joinClasses('input', 'input-disabled')}/>
```

### joinClasses.withStyle(style)

It comes with function to attach a style module and improve code legibility

```jsx
const joinClasses = require('join-classes-x');
const styles = require('./style.scss');

const classes = joinClasses.withStyle(styles);

// ...

<Component className={classes('button', 'button-primary')}/>
<Component className={classes('button', 'button-secondary')}/>
<Component className={classes('button', 'button-disabled')}/>
```

All in `<One />` styled-component
---

## Install
`yarn add styled-one`
or
`npm i -S styled-one`

## Usage Example
```js
<One margin="2em" padding={10} border="1px solid red" borderTop="1px solid blue" borderBottomColor="black" />
```

### Responsive
```js
<One margin="2em" responsive={{ xs: { marginTop: "20px" }}} />
```

| Breakpoints | min-width | max-width |
|-------------|:---------:|:---------:|
| md          | 576px     | -         |
| md          | 768px     | -         |
| lg          | 992px     | -         |
| xl          | 1200px    | -         |
| only-xs     | -         | 575px     |
| only-sm     | 576px     | 767px     |
| only-md     | 768px     | 991px     |
| only-lg     | 992px     | 1199px    |

### Shorthand property
Everything look like CSS, so `styled-one` support shorthand property as well.

**Example:**
```js
<One margin="20px 1em 10px 0" />
```
*And you can mixed it!*

### Unit(s)
For easy to read code, I prefer set value as **number** will be `px`, and **string** for everything else.

**Example:**
```js
<One margin={20} marginTop="2rem" marginBottom="5%" />
```
*It mean: `margin: 2rem 20px 5% 20px`*

### Grid system
`styled-one` is not shipped with any grid system. I'll consider add it later. But with `Flex` and `Grid`, maybe you does not need it anymore.

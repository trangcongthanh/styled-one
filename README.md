# styled-one

## What?

All in `<One />` styled-component

## Why?

Bacause, you want to change style via props but too lazy to handle each CSS Property.

## Installation

`yarn add styled-one styled-components`
or
`npm i -S styled-one styled-components`

And then import it

```js
import One from "styled-one";
```

## How?

You write your base style:

```js
const Box = styled(One)`
  border-radius: 4px;
  padding: 10px;
`;
```

And you can tweak your `<Box />`:

```js
<Box margin={10} borderTopLeftRadius={8}>
  Box Content
</Box>
```

## Props

`<One />` support almost CSS properties. Just pass it in camelCase to your component.

```js
<One margin="2em" padding={10} border="1px solid red" borderTop="1px solid blue" borderBottomColor="black" />
```

### Responsive

```js
<One margin="2em" responsive={{ md: { marginTop: "20px" } }} />
```

| Breakpoints | min-width | max-width |
| ----------- | :-------: | :-------: |
| md          |   576px   |     -     |
| md          |   768px   |     -     |
| lg          |   992px   |     -     |
| xl          |  1200px   |     -     |
| only-xs     |     -     |   575px   |
| only-sm     |   576px   |   767px   |
| only-md     |   768px   |   991px   |
| only-lg     |   992px   |  1199px   |

### Shorthand property

Everything look like CSS, so `styled-one` support shorthand property as well.

**Example:**

```js
<One margin="20px 1em 10px 0" />
```

_And you can mix it!_

### Unit(s)

For easy to read code, I prefer set value as **number** will be `px`, and **string** for everything else.

**Example:**

```js
<One margin={20} marginTop="2rem" marginBottom="5%" />
```

_margin: 2rem 20px 5% 20px_

### Grid system

`styled-one` is not shipped with any grid system. I'll consider add it later. But with `Flex` and `Grid`, maybe you does not need it anymore.

## Utilities

### `<Flex />`

Extended from One with some specific props for css flex.

**Usage:**

```js
import { Flex } from 'styled-one'

<Flex inline>
  <Flex flex={1}>Item 1</Flex>
  <Flex>Item 2</Flex>
</Flex>
```

| Props  | Type    | Description               |
| ------ | ------- | ------------------------- |
| inline | boolean | `display: inline-flex;`   |
| column | boolean | `flex-direction: column;` |

### `<Grid />`

Extended from One with some specific props for css grid.

**Usage:**

```js
import { Grid } from 'styled-one'

<Grid row={2} column={2} columnWidth={200} rowHeight={[200, '1fr']}>
  <div>Item 1 - 1</div>
  <div>Item 1 - 2</div>
  <Flex>Item 2 - 1</Flex>
  <div>Item 2 - 2</div>
</Grid>
```

| Props       | Type                  | Description             |
| ----------- | --------------------- | ----------------------- |
| inline      | boolean               | `display: inline-grid;` |
| column      | number                |                         |
| row         | number                |                         |
| columnWidth | number, array, string |                         |
| rowHeight   | number, array, string |                         |

## Legal

Released under MIT license.

Copyright © 2018-present Thanh Trang

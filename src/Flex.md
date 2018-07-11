# Flex Example

Flex example:

```js
<Flex marginTop={10} marginBottom="1em" marginHorizontal={20} border="1px solid #eee" padding={10} alignItems="center">
  <Flex
    column
    alignItems="center"
    justifyContent="center"
    border="1px solid red"
    borderTop="1px solid blue"
    borderTopWidth={5}
    flex="1"
    boxShadow="5px 5px blue, 10px 10px red, 15px 15px green"
    responsive={{
      sm: {
        flex: "2",
        flexDirection: "row"
      },
      md: {
        flex: "1",
        flexDirection: "column",
        borderTop: "1px solid green"
      },
      "only-xs": {
        background: "red"
      }
    }}
  >
    <div>Item 1</div>
    <div>Item 2</div>
  </Flex>
  <Flex flexGrow={1} inline>
    Item 2
  </Flex>
  <Flex>Item 3</Flex>
</Flex>
```

```js
<Flex>
  <Flex>Item 1</Flex>
  <Flex order={-1}>Item 2</Flex>
</Flex>
```

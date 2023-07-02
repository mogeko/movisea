# is-plain-object

> Returns true if an object was created by the `Object` constructor, or Object.create(null).

This project originated from [is-plain-object](https://github.com/jonschlinkert/is-plain-object) (released under [MIT license](https://github.com/jonschlinkert/is-plain-object/blob/master/LICENSE)). I reimplemented it by TypeScript.

## Usage

with ES modules:

```ts
import { isPlainObject } from "is-plain-object";
```

**true** when created by the `Object` constructor, or Object.create(null).

```ts
isPlainObject(Object.create({})); // => true
isPlainObject(Object.create(Object.prototype)); // => true
isPlainObject({ foo: "bar" }); // => true
isPlainObject({}); // => true
isPlainObject(Object.create(null)); // => true
```

**false** when not created by the `Object` constructor.

```ts
isPlainObject(["foo", "bar"]); // => false
isPlainObject([]); // => false
isPlainObject(new Foo()); // => false
```

## License

The [original project](https://github.com/jonschlinkert/is-plain-object) is released under the [MIT License](https://github.com/jonschlinkert/is-plain-object/blob/master/LICENSE).

The code in this project is released under the [MIT License](./LICENSE).

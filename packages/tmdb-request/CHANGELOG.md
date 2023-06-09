# tmdb-request

## 1.3.2

### Patch Changes

- [#47](https://github.com/mogeko/movisea/pull/47) [`02c2203`](https://github.com/mogeko/movisea/commit/02c22031e9f0fd9d286abfc51c6f125eb6914090) Thanks [@mogeko](https://github.com/mogeko)! - Keep `body` alway be `null` unless method is `POST`

- [#47](https://github.com/mogeko/movisea/pull/47) [`14fc3a4`](https://github.com/mogeko/movisea/commit/14fc3a4829d4602b5935ced24ea13c3e451f4c04) Thanks [@mogeko](https://github.com/mogeko)! - Add a guide to load `@mogeko/tmdb-request` directly in the browser (from [esm.sh](https://esm.sh)).

- [#47](https://github.com/mogeko/movisea/pull/47) [`9803a6e`](https://github.com/mogeko/movisea/commit/9803a6e53cc802d2bb0ca43ffd3ec657eabeca8d) Thanks [@mogeko](https://github.com/mogeko)! - Parse new requst parameter `body`

## 1.3.1

### Patch Changes

- [#45](https://github.com/mogeko/movisea/pull/45) [`772e193`](https://github.com/mogeko/movisea/commit/772e193647ab4f1aeb405e6be250de1b197914cf) Thanks [@mogeko](https://github.com/mogeko)! - Add TSDoc for each known request parameter

- [#45](https://github.com/mogeko/movisea/pull/45) [`040bc76`](https://github.com/mogeko/movisea/commit/040bc768e8934c4e0bbb955c3e12340b2da41784) Thanks [@mogeko](https://github.com/mogeko)! - Standardize the input of parameters by [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html).

## 1.3.0

### Minor Changes

- [#43](https://github.com/mogeko/movisea/pull/43) [`f1edd70`](https://github.com/mogeko/movisea/commit/f1edd705fa368d3d5dbc5f4cfbbff93c4c972abd) Thanks [@mogeko](https://github.com/mogeko)! - Compatible with `:varname` syntax for url template

### Patch Changes

- [#43](https://github.com/mogeko/movisea/pull/43) [`67fad93`](https://github.com/mogeko/movisea/commit/67fad93720aa6d4716eaa5a312c11823152dec78) Thanks [@mogeko](https://github.com/mogeko)! - Extend `splitObj` function by paradigm

- [#43](https://github.com/mogeko/movisea/pull/43) [`0c0916b`](https://github.com/mogeko/movisea/commit/0c0916bce1db46eee04f0dc5802fcb280294beb5) Thanks [@mogeko](https://github.com/mogeko)! - Adjust the type system

- [#43](https://github.com/mogeko/movisea/pull/43) [`aa1fa17`](https://github.com/mogeko/movisea/commit/aa1fa176ffb4a14513b9b6dd1809e89f0b4d81b6) Thanks [@mogeko](https://github.com/mogeko)! - Write TSDoc for all exported interfaces and types

## 1.2.5

### Patch Changes

- [#41](https://github.com/mogeko/movisea/pull/41) [`c7304c1`](https://github.com/mogeko/movisea/commit/c7304c10629a443c00465c41e1d32ca1c4de9774) Thanks [@mogeko](https://github.com/mogeko)! - Upgrade dependencies

  - bump `@types/node` from `20.2.5` to `20.3.3` ([#37](https://github.com/mogeko/movisea/pull/37))

- Updated dependencies [[`c7304c1`](https://github.com/mogeko/movisea/commit/c7304c10629a443c00465c41e1d32ca1c4de9774)]:
  - @mogeko/is-plain-object@0.0.3

## 1.2.4

### Patch Changes

- [#33](https://github.com/mogeko/movisea/pull/33) [`8a7c476`](https://github.com/mogeko/movisea/commit/8a7c4767fc817e495792e1ce99fbc12e6f4722b5) Thanks [@mogeko](https://github.com/mogeko)! - Rename `tmdb-request` to `@mogeko/tmdb-request`

## 1.2.3

### Patch Changes

- [#28](https://github.com/mogeko/movisea/pull/28) [`f02efa6`](https://github.com/mogeko/movisea/commit/f02efa69403ef02284b49ff0e0e7b050a9b4c99c) Thanks [@mogeko](https://github.com/mogeko)! - Replace `is-plain-object` by our own implemented

- Updated dependencies [[`f02efa6`](https://github.com/mogeko/movisea/commit/f02efa69403ef02284b49ff0e0e7b050a9b4c99c)]:
  - @mogeko/is-plain-object@0.0.2

## 1.2.2

### Patch Changes

- [#22](https://github.com/mogeko/movisea/pull/22) [`a87825e`](https://github.com/mogeko/movisea/commit/a87825e9ee8de8e817d21ac09c6b23612c07c48c) Thanks [@mogeko](https://github.com/mogeko)! - Re-export `mergeDeep` function as `./merge-deep`

- [#22](https://github.com/mogeko/movisea/pull/22) [`a87825e`](https://github.com/mogeko/movisea/commit/a87825e9ee8de8e817d21ac09c6b23612c07c48c) Thanks [@mogeko](https://github.com/mogeko)! - Re-export `Options` type for `request` and `parser` functions

## 1.2.1

### Patch Changes

- [#18](https://github.com/mogeko/movisea/pull/18) [`0bfb3b1`](https://github.com/mogeko/movisea/commit/0bfb3b19ee76fcc89d33d9e200be815e50f60848) Thanks [@mogeko](https://github.com/mogeko)! - Add TSDoc/JSDoc for `request` function

- [#18](https://github.com/mogeko/movisea/pull/18) [`18c06db`](https://github.com/mogeko/movisea/commit/18c06db12b40056c4f287046e89a2117b704f6e8) Thanks [@mogeko](https://github.com/mogeko)! - Add TSDoc/JSDoc for `parser` function

- [#18](https://github.com/mogeko/movisea/pull/18) [`3d13fcc`](https://github.com/mogeko/movisea/commit/3d13fcc1b9456b45aba9026fc7621caae711182d) Thanks [@mogeko](https://github.com/mogeko)! - Supplement the TSDoc/JSDoc for enter functions

## 1.2.0

### Minor Changes

- [#16](https://github.com/mogeko/movisea/pull/16) [`3698e8d`](https://github.com/mogeko/movisea/commit/3698e8dfcb77f465519b84287ca95c464106d048) Thanks [@mogeko](https://github.com/mogeko)! - The parsing results will distinguish between `baseUrl` and `url`.

## 1.1.1

### Patch Changes

- [#13](https://github.com/mogeko/movisea/pull/13) [`9393959`](https://github.com/mogeko/movisea/commit/9393959f8e7fcba6fc3c9d5d23713655863d9bbd) Thanks [@mogeko](https://github.com/mogeko)! - Separate out fetch's wraper fetcher

## 1.1.0

### Minor Changes

- [`73e6e90`](https://github.com/mogeko/movisea/commit/73e6e9075ee8bd28bf10bfbd255cf7d43c56e0ca) Thanks [@mogeko](https://github.com/mogeko)! - add additional meaning to parser

  Nowadays, We allow `route` to be empty. In this case, we get the `route` (`url` and `method`) from `opts`.

- [#9](https://github.com/mogeko/movisea/pull/9) [`2837897`](https://github.com/mogeko/movisea/commit/2837897af7d5c3b3396601ec1534f7ee86333215) Thanks [@mogeko](https://github.com/mogeko)! - Adjust the types so that the type system model can better describe the actual situation.

- [#9](https://github.com/mogeko/movisea/pull/9) [`f9ec3ad`](https://github.com/mogeko/movisea/commit/f9ec3adb187a7642a85db9a28c4ffe0284bbd7d6) Thanks [@mogeko](https://github.com/mogeko)! - Modify the overload of the `request` function to keep identical behavior.

## 1.0.0

### Major Changes

- This is the minimum available version of this library.

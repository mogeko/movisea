# tmdb-request

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

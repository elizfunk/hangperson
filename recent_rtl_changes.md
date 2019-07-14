# Package naming
Changed from `react-testing-library` to `@testing-library/react` with the recent release of v8
jest-dom also moved to `@testing-library/jest-dom`

# API Changes
v7 introduced 2 breaking changes
- deprecated `ByValue` and `BySelectText` queries in favor of `ByDisplayValue`
- `getBy*` now fails when more than one element is returned. use `getAllBy*` instead when expecting to match multiple elements

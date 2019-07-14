
// enables 'toHaveStyleRule' matcher
import 'jest-styled-components'

// jest-dom offers excellent matchers, especially for a11y
// toHaveAttribute (useful for aria attrs)
// toHaveFocus, toBeRequired, toHaveValue, toBeValid, etc 
import '@testing-library/jest-dom/extend-expect'

// automates cleanup, so you can omit
// import { cleanup } from '@testing-library/react
// afterEach(() => cleanup())
import '@testing-library/react/cleanup-after-each'

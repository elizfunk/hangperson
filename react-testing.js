import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, theme } from 'pcln-design-system'

const customRender = (node, ...options) =>
  render(<ThemeProvider theme={theme}>{node}</ThemeProvider>, options)

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

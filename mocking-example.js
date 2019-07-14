// ComponentToTest.js
import React, { Fragment } from 'react'
import MediaQuery from 'react-responsive'

const ComponentToTest = props => {
  return (
    <Fragment>
      <Header>This is my header</Header>
      <MediaQuery maxWidth='500px'>
        <Container>
          {props.children}
        </Container>
      </MediaQuery>
    </Fragment>
  )
}

// this example demonstrates mocking something that is not the concern of this component
// this is especially imported because JSDOM does not implement media queries

// ComponentToTest.spec.js
import { render } from '@testing-library/react'
import ComponentToTest from './ComponentToTest'

jest.mock('react-responsive', ({ children }) => children)

describe('ComponentToTest', () => {
  test('renders children', () => {
    const { getByText } = render(
      <ComponentToTest>
        This is some content!
      </ComponentToTest>
     )
     
     expect(getByText('This is some content!')).toBeTruthy()
     // without the mock, this would fail because the matcher in react-responsive
     // would return false due to the feature not being implemented in JSDOM
  })
})

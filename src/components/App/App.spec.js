import React from 'react'
import {
  fireEvent,
  prettyDOM,
  render,
  cleanup
} from '@testing-library/react'

import { mount, shallow } from 'enzyme'

import App from '.'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('baseline', () => {
  expect(2 + 2).toEqual(4)
})

test('hangperson title renders - RTL', () => {
  const { getByText, queryByText } = render(<App />)

  expect(getByText('hangperson')).toBeTruthy()
  expect(queryByText('hamburger')).toBeFalsy()
})

test('hangperson title renders - Enzyme - shallow', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('[data-testid="game-title"]')).toHaveLength(1)
})

test('hangperson title renders - Enzyme - mount', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('[data-testid="game-title"]')).toHaveLength(3)
})

test('hangperson title renders - RTL', () => {
  const { getByText, queryByText } = render(<App />)

  expect(getByText('hangperson')).toBeTruthy()
  expect(queryByText('hamburger')).toBeFalsy()
})

test('guess a word submission creates gameboard', () => {
  const { getAllByText, getByLabelText, getByText  } = render(<App />)

  const inputWordTarget = getByLabelText('Enter a word to guess')
  const buttonWordTarget = getByText('Start the Game!')
  fireEvent.change(inputWordTarget, { target: { value: 'bird' } })
  fireEvent.click(buttonWordTarget)

  expect(getAllByText('_').length).toEqual(4)
})

test('guess a word submission creates gameboard - Enzyme', () => {
  const wrapper = mount(<App />)
  const instance = wrapper.instance()

  instance.createNewGame('bird')

  expect(instance.state.gameBoard).toHaveLength(4)
})

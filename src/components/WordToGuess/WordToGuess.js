import React from 'react'
import styled from 'styled-components'

import InputBlock from '../InputBlock'

const Wrapper = styled.div`
  padding: 20px;
 `

const WordToGuess = ({
  handleChange,
  handleClick,
  wordInput
}) => {
  return (
    <Wrapper>
      <InputBlock
        inputValue={wordInput}
        buttonText='Start the Game!'
        handleChange={handleChange}
        handleClick={handleClick}
        labelId='word-to-guess'
        questionText='Enter a word to guess'
      />
    </Wrapper>
  )
}

export default WordToGuess

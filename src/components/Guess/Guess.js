import React from 'react'
import styled from 'styled-components'

import InputBlock from '../InputBlock'

const Wrapper = styled.div`
  padding: 20px;  
`

const AlreadyGuessed = styled.p`
  margin-bottom: 24px;
`

const Guess = ({
  alreadyGuessed,
  buttonText,
  handleChange,
  handleClick,
  inputValue,
  questionText
}) => {
  return (
    <Wrapper>
      <h2>Already Guessed</h2>
      <AlreadyGuessed>{alreadyGuessed}</AlreadyGuessed>
      <InputBlock
        buttonText={buttonText}
        handleChange={handleChange}
        handleClick={handleClick}
        inputValue={inputValue}
        labelId='guess-letter'
        questionText={questionText}
      />
    </Wrapper>
  )
}

export default Guess

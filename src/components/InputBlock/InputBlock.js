import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const InputLabel = styled.label`
  margin-right: 8px;
`

const InputField = styled.input`
  margin-right: 8px;
`


const InputBlock = ({
  buttonText,
  handleChange,
  handleClick,
  inputValue,
  labelId,
  questionText
}) => {
  return (
    <Wrapper>
      <InputLabel id={labelId}>{questionText}</InputLabel>
      <InputField
        aria-labelledby={labelId}
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={() => { handleClick(inputValue) }}>{buttonText}</button>
    </Wrapper>
  )
}

export default InputBlock

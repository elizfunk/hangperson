import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

 const WordWrapper = styled.div`
  display: flex;
 `

 const Letter = styled.div`
  margin: 4px;
 `

const Progress = ({
  gameBoard
}) => {
  return (
    <Wrapper>
      <h2>Guess all the letters to win the game</h2>
      <WordWrapper>
        {
          gameBoard && gameBoard.length > 0 &&
          gameBoard.map((letter, idx) => <Letter key={`${letter}_${idx}`}>{letter}</Letter>)
        }
      </WordWrapper>
    </Wrapper>
  )
}

export default Progress

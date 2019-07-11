import React, { Component } from 'react'
import styled from 'styled-components'

import Guess from '../Guess'
import Hangperson from '../Hangperson'
import Progress from '../Progress'
import WordToGuess from '../WordToGuess'

const Wrapper = styled.div`
  padding: 20px;  
`

const Columns = styled.div`
  display: flex;
`

const GamePlay = styled.div``

const GameDisplay = styled.div`
  margin-left: 16px;
`

const GameTitle = styled.h1``

const getBodyPart = (guessNumber) => {
  switch (guessNumber) {
    case 1:
      return 'head'
    case 2:
      return 'body'
    case 3:
      return 'leftArm'
    case 4:
      return 'rightArm'
    case 5:
      return 'leftLeg'
    case 6:
      return 'rightLeg'
  }
}
/*
  TODO: 
  win the game
  lose the game
*/

class App extends Component {
  state = {
    alreadyGuessed: [],
    guessInput: '',
    numberOfWrongGuesses: 0,
    word: [],
    wordInput: '',
    gameBoard: [],
    gameBoardValidation: [],
    gameLost: false,
    gameWon: false,
    hangperson: {
      head: false,
      body: false,
      leftArm: false,
      rightArm: false,
      leftFoot: false,
      rightFoot: false
    }
  }

  createNewGame = (word) => {
    const rE = /\W|_|[0-9]|[A-Z]/g
    if (word.match(rE)) {
      alert(`Words can only have lowercase letters!`)
      this.setState({
        wordInput: ''
      })
    } else if (word && word.length > 28) {
      alert(`Words must be shorter than 29 letters!`)
      this.setState({
        wordInput: ''
      })
    } else {
      const gameBoard = []
      const gameBoardValidation = []
      for (let letter of word) {
        gameBoard.push('_')
        gameBoardValidation.push(false)
      }
  
      this.setState({ 
        word: word.split(''),
        numberOfWrongGuesses: 0,
        wordInput: '',
        gameLost: false,
        gameWon: false,
        alreadyGuessed: [],
        gameBoard,
        gameBoardValidation,
        hangperson: {
          head: false,
          body: false,
          leftArm: false,
          rightArm: false,
          leftFoot: false,
          rightFoot: false
        }
      })
    }
  }

  handleWordInputChange = (event) => {
    this.setState({wordInput: event.target.value})
  }

  handleGuess = (event) => {
    this.setState({guessInput: event.target.value})
  }

  handleGuessSubmit = (guess) => {
    const rE = /\W|_|[0-9]|[A-Z]/g
    if (guess && guess.length > 1) {
      this.setState({ guessInput: '' })
      alert(`You can only guess one letter at a time!`)
    } else if (guess.match(rE)) {
      this.setState({ guessInput: '' })
      alert(`You can only guess lowercase letters!`)
    } else if (this.state.alreadyGuessed.includes(guess)) {
      this.setState({ guessInput: '' })
      alert(`You already guessed "${guess}."  Please try again.`)
    } else {
      this.setState((state) => {
        state.alreadyGuessed.push(guess)
        const gameBoard = state.gameBoard
        const gameBoardValidation = state.gameBoardValidation
        const hangperson = state.hangperson
        let gameWon = state.gameWon
        let gameLost = state.gameLost
        let wrongGuess = true
        let numberOfWrongGuesses = state.numberOfWrongGuesses

        for (let i = 0; i < state.word.length; i++) {
          if (state.word[i] === guess) {
            gameBoard[i] = guess
            gameBoardValidation[i] = true
            wrongGuess = false
          }
        }

        if (wrongGuess) {
          numberOfWrongGuesses++
          const bodyPartToUpdate = getBodyPart(numberOfWrongGuesses)
          hangperson[bodyPartToUpdate] = true
          if (numberOfWrongGuesses >= 6) {
            gameLost = true
          }
        } else if (gameBoardValidation.every(letter => letter === true)) {
          gameWon = true
        }

        return ({
          alreadyGuessed: state.alreadyGuessed,
          guessInput: '',
          numberOfWrongGuesses: numberOfWrongGuesses,
          gameBoard,
          gameBoardValidation,
          gameWon,
          gameLost,
          hangperson
        })
      })
    }
  }

  guessChecker = (guess) => {
    this.setState(state => {
      const gameBoard = state.gameBoard
      const gameBoardValidation = state.gameBoardValidation
      let gameWon = false

      for (let i = 0; i < state.word.length; i++) {
        if (state.word[i] === guess) {
          gameBoard[i] = guess
          gameBoardValidation[i] = true
        }
      }

      if (gameBoardValidation.every(letter => letter === true)) {
        gameWon = true
      }

      return {
        gameBoard,
        gameBoardValidation,
        gameWon
      }
    })
  }

  render () {
    return (
      <Wrapper>
        <GameTitle data-testid='game-title'>hangperson</GameTitle>
        <Columns>
          <GamePlay>
            <WordToGuess
              wordInput={this.state.wordInput}
              handleChange={this.handleWordInputChange}
              handleClick={this.createNewGame}
            />
            <Guess
              alreadyGuessed={this.state.alreadyGuessed.join(', ') || 'none'}
              buttonText='Submit Guess'
              handleChange={this.handleGuess}
              handleClick={this.handleGuessSubmit}
              inputValue={this.state.guessInput}
              questionText='Guess a letter'
            />
          </GamePlay>
          <GameDisplay>
            <Progress gameBoard={this.state.gameBoard} />
            <Hangperson
              hangperson={this.state.hangperson}
              gameLost={this.state.gameLost}
              gameWon={this.state.gameWon}
            />
          </GameDisplay>
        </Columns>
      </Wrapper>
    )
  }
}

export default App

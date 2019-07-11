import React from 'react'
import styled from 'styled-components'
import BodyImage from '../BodyImage'

const HangpersonWrapper = styled.div`
  position: relative;
`

const WinLoseMessage = styled.h2`
  color: ${props => props.color};
`

const Hangperson = ({ hangperson, gameLost, gameWon }) => {
  const { head, body, leftArm, rightArm, leftLeg, rightLeg } = hangperson

  return (
    <div>
      <h2>You will hang!</h2>
      <HangpersonWrapper>
        <img alt='scaffold' src='/images/scaffold.png' width='400' height='400' />
        { head &&
          <BodyImage
            altText='head'
            imgSrc='/images/head.png'
            zIndex='100'
          />
        }
        { body &&
          <BodyImage
            altText='body'
            imgSrc='/images/body.png'
            zIndex='90'
          />
        }
        {
          leftArm &&
          <BodyImage
            altText='leftArm'
            imgSrc='/images/left_arm.png'
            zIndex='80'
          />
        }
        {
          rightArm &&
          <BodyImage
            altText='rightArm'
            imgSrc='/images/right_arm.png'
            zIndex='80'
          />
        }
        {
          leftLeg &&
          <BodyImage
            altText='leftLeg'
            imgSrc='/images/left_leg.png'
            zIndex='80'
          />
        }
        {
          rightLeg &&
          <BodyImage
            altText='rightLeg'
            imgSrc='/images/right_leg.png'
            zIndex='80'
          />
        }
      </HangpersonWrapper>
      { gameLost &&
        <WinLoseMessage textColor='red'>You lose!</WinLoseMessage>
      }
      { gameWon &&
        <WinLoseMessage textColor='green'>You Win!</WinLoseMessage>
      }
    </div>
  )
}

export default Hangperson
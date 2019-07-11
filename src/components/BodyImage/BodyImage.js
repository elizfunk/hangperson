import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ props => props.zIndex};
 `

const BodyImage = ({
  altText,
  zIndex,
  imgSrc
}) => {
  return (
    <Image
      alt={altText}
      src={imgSrc}
      zIndex={zIndex}
      width='400'
      height='400'
    />
  )
}

export default BodyImage

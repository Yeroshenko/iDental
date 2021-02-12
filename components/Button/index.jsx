import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

export const Button = ({ children, onPress, type = 'main' }) => (
  <ButtonContainer onPress={onPress} type={type}>
    <ButtonText>{children}</ButtonText>
  </ButtonContainer>
)


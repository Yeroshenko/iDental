import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const PlusButton = () => (
  <Circle style={{
    shadowColor: '#2A86FF',
    shadowRadius: 2.4,
    shadowOpacity: 0.7,
    elevation: 4
  }}>
    <Ionicons name='ios-add' size={36} color='#FFF' />
  </Circle>
)

const Circle = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  right: 24px;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
  background: #2A86FF;
`
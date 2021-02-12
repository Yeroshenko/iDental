import React from 'react'
import { BadgeText } from './styles'

export const Badge = ({ type = 'main', children, style = {} }) => (
  <BadgeText type={type} style={style}>{children}</BadgeText>
)
import React from 'react'

import { Avatar, FullName, GrayText, AppointmentInfo, AppointmentItem, AvatarLetter } from './styles'
import { Badge } from '../Badge'
import { getAvatarColor } from '../../utils'

export const Appointment = ({ info, navigation }) => {
  const { patient, diagnosis, isActive, time } = info

  const avatarLetter = patient.fullName[0].toUpperCase()
  const avatarColors = getAvatarColor(avatarLetter)

  return (
    <AppointmentItem onPress={() => navigation.navigate('Patient', info)}>
      <Avatar background={avatarColors.background}>
        <AvatarLetter color={avatarColors.color}>{avatarLetter}</AvatarLetter>
      </Avatar>
      <AppointmentInfo>
        <FullName>{patient.fullName}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </AppointmentInfo>
      <Badge type={isActive ? 'main' : 'outline'}>{time}</Badge>
    </AppointmentItem>
  )
}
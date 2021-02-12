import React from 'react'
import { Avatar, FullName, GrayText, AppointmentInfo, AppointmentItem } from './styles'
import { Badge } from '../Badge'

export const Appointment = ({ info, navigation }) => {
  const { user, diagnosis, isActive, time } = info

  return (
    <AppointmentItem onPress={() => navigation.navigate('Patient', info)}>
      <Avatar source={{ uri: user.avatar }} />
      <AppointmentInfo>
        <FullName>{user.fullName}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </AppointmentInfo>
      <Badge type={isActive ? 'main' : 'outline'}>{time}</Badge>
    </AppointmentItem>
  )
}
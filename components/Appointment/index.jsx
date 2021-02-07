import React from 'react'
import {
  Avatar,
  FullName,
  GrayText,
  AppointmentDate,
  AppointmentInfo,
  AppointmentItem,
  AppointmentWrapper
} from './styles'

export const Appointment = ({ user, diagnosis, isActive, time }) => (
  <AppointmentItem>
    <Avatar source={{ uri: user.avatar }} />
    <AppointmentInfo>
      <FullName>{user.fullName}</FullName>
      <GrayText>{diagnosis}</GrayText>
    </AppointmentInfo>
    <AppointmentDate isActive={isActive}>{time}</AppointmentDate>
  </AppointmentItem>
)

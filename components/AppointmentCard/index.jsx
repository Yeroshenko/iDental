import React from 'react'
import { Feather, FontAwesome5 } from '@expo/vector-icons'

import { Badge } from '../Badge'
import {
  AppointmentCardBadges,
  AppointmentCardInfo,
  AppointmentCardLabel,
  AppointmentCardMore,
  AppointmentCardValue,
  AppointmentCardWrapper
} from './styles'

export const AppointmentCard = () => (
  <AppointmentCardWrapper>
    <AppointmentCardMore>
      <Feather name='more-vertical' size={24} color='#000' />
    </AppointmentCardMore>

    <AppointmentCardInfo>
      <FontAwesome5 name='tooth' size={16} color='#A3A3A3' />
      <AppointmentCardLabel>Зуб: <AppointmentCardValue>12</AppointmentCardValue>
      </AppointmentCardLabel>
    </AppointmentCardInfo>

    <AppointmentCardInfo>
      <FontAwesome5 name='clipboard-list' size={16} color='#A3A3A3' />
      <AppointmentCardLabel>Диагноз: <AppointmentCardValue>пульпит</AppointmentCardValue>
      </AppointmentCardLabel>
    </AppointmentCardInfo>

    <AppointmentCardBadges>
      <Badge style={{ width: 175 }}>11.10.2019 - 15:40</Badge>
      <Badge type='primary'>1500 Р</Badge>
    </AppointmentCardBadges>
  </AppointmentCardWrapper>
)

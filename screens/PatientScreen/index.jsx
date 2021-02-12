import React from 'react'
import { Foundation } from '@expo/vector-icons'

import {
  AppointmentListCard,
  AppointmentsCardList,
  AppointmentsTitle,
  Container,
  PatientAppointments,
  PatientButtons,
  PatientCallButton,
  PatientCard,
  PatientName,
  PatientPhone
} from './styles'

import { AppointmentCard, Button, PlusButton } from '../../components'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28afa'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6aaf3'
  },
  {
    id: '58694a0f-3da1-471f-bd96-qwe'
  }
]

export const PatientScreen = ({ navigation, route }) => {
  const { user } = route.params

  return (
    <Container>
      <PatientCard>
        <PatientName>{user.fullName}</PatientName>
        <PatientPhone>{user.phone}</PatientPhone>
        <PatientButtons>
          <Button>Формула зубов</Button>
          <PatientCallButton>
            <Button type='primary'>
              <Foundation name='telephone' size={22} color='#FFF' />
            </Button>
          </PatientCallButton>
        </PatientButtons>
      </PatientCard>

      <PatientAppointments>
        <AppointmentsTitle>Приемы</AppointmentsTitle>

        <AppointmentsCardList
          data={DATA}
          renderItem={() => (
            <AppointmentListCard>
              <AppointmentCard />
            </AppointmentListCard>
          )}
          keyExtractor={(item) => item.id}
        />
      </PatientAppointments>

      <PlusButton />
    </Container>
  )
}
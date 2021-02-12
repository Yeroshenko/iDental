import React from 'react'

import { Appointment, PlusButton } from '../../components'
import { AppointmentsList, Container, ListTitle } from './styles'


const items = [
  {
    time: '14:30',
    diagnosis: 'Стерелизация',
    isActive: true,
    user: {
      phone: '+7 (999) 300-66-55',
      fullName: 'MALADOY',
      avatar: 'https://cutt.ly/bkvbbIh'
    }
  },
  {
    time: '17:30',
    diagnosis: 'Стерелизация',
    user: {
      phone: '+7 (999) 200-66-66',
      fullName: 'Otricala',
      avatar: 'https://cutt.ly/UkKPP3k'
    }
  }
]

const sections = [
  {
    title: '14 сентября',
    data: items
  },
  {
    title: '15 сентября',
    data: items
  },
  {
    title: '16 сентября',
    data: items
  },
  {
    title: '17 сентября',
    data: items
  },
  {
    title: '18 сентября',
    data: items
  },
  {
    title: '19 сентября',
    data: items
  }
]

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <AppointmentsList
        sections={sections}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <Appointment navigation={navigation} info={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <ListTitle>{title}</ListTitle>
        )}
      />
      <PlusButton />
    </Container>
  )
}
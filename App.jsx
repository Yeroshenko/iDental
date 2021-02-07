import React from 'react'
import styled from 'styled-components/native'

import { Appointment, PlusButton, SectionTitle } from './components'

const items = [
  {
    time: '14:30',
    diagnosis: 'Стерелизация',
    isActive: true,
    user: {
      fullName: 'MALADOY',
      avatar: 'https://cutt.ly/bkvbbIh'
    }
  },
  {
    time: '17:30',
    diagnosis: 'Стерелизация',
    user: {
      fullName: 'Otricala',
      avatar: 'https://cutt.ly/bkvbbIh'
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

export default function App() {
  return (
    <Container>
      <AppointmentsList
        sections={sections}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <ListTitle>{title}</ListTitle>
        )}
      />
      <PlusButton />
    </Container>
  )
}


const ListTitle = styled(SectionTitle)`
  margin-top: 20px;
`


const AppointmentsList = styled.SectionList`
  padding: 0 20px;
`

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
`

import React, { useEffect, useState } from 'react'

import { appointmentsApi } from '../../api'
import { Appointment, PlusButton } from '../../components'
import { AppointmentsList, Container, ListTitle } from './styles'

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    appointmentsApi.getAll()
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      {data.length > 0 &&
        <AppointmentsList
          sections={data}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => <Appointment navigation={navigation} info={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <ListTitle>{title}</ListTitle>
          )}
        />
      }
      <PlusButton />
    </Container>
  )
}
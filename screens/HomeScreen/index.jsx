import React, { useEffect, useState } from 'react'

import { appointmentsApi } from '../../api'
import { Appointment, PlusButton } from '../../components'
import { AppointmentsList, Container, ListTitle } from './styles'

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const toggleRefreshing = () => setRefreshing(state => !state)

  const fetchAppointments = () => {
    toggleRefreshing()

    appointmentsApi.getAll()
      .then(res => setData(res.data))
      .catch(err => console.log(err))
      .finally(toggleRefreshing)
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return (
    <Container>
      {data.length > 0 &&
        <AppointmentsList
          sections={data}
          onRefresh={fetchAppointments}
          refreshing={refreshing}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => <Appointment navigation={navigation} info={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <ListTitle>{title}</ListTitle>
          )}
        />
      }
      <PlusButton onPress={() => alert('pressed')} />
    </Container>
  )
}
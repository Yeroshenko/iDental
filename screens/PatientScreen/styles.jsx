import styled from 'styled-components/native'
import { AppointmentCard } from '../../components'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const PatientCard = styled.View`
  background-color: #FFF;
  padding: 20px 20px 32px;
  position: relative;
`

export const PatientCardMore = styled.TouchableOpacity`
  position: absolute;
  top: 21px;
  right: 14px;
  opacity: .4;
`

export const PatientName = styled.Text`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 7px;
`

export const PatientPhone = styled.Text`
  font-size: 16px;
  color: #8B979F;
`

export const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const PatientCallButton = styled.View`
  margin-left: 10px;
  width: 45px;
`

export const PatientAppointments = styled.View`
  flex: 1;
  background-color: #F8FAFD;
`

export const AppointmentsTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin: 24px 20px 12px;
`

export const AppointmentsCardList = styled.FlatList`
  padding: 0 20px;
`

export const AppointmentListCard = styled.View`
  margin-bottom: 20px;
`

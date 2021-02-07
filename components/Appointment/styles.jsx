import styled from 'styled-components/native'

export const AppointmentWrapper = styled.View`

`

export const AppointmentItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 40px;
`

export const AppointmentInfo = styled.View`
  margin-left: 16px;
  flex: 1;
`

export const AppointmentDate = styled.Text`
  background-color: ${props => props.isActive ? '#2A86FF' : '#E9F5FF'};
  color: ${props => props.isActive ? '#FFFFFF' : '#4294FF'};
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  width: 68px;
  line-height: 30px;
`

export const GrayText = styled.Text`
  font-size: 16px;
  color: #8B979F;
`

export const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`
import styled from 'styled-components/native'

export const AppointmentItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`

export const Avatar = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) => background};
`

export const AvatarLetter = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  color: ${({ color }) => color};
`

export const AppointmentInfo = styled.View`
  margin-left: 16px;
  flex: 1;
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

import styled from 'styled-components/native'

export const AppointmentCardWrapper = styled.View`
  padding: 20px 24px;
  background-color: #FFFFFF;
  border-radius: 10px;
`

export const AppointmentCardMore = styled.TouchableOpacity`
  position: absolute;
  top: 21px;
  right: 14px;
  opacity: .4;
`
// shadow-offset: { width: 0; height: 2 };
// shadow-color: #000;
// shadow-radius: 5px;
// shadow-opacity: 0.03;
// elevation: 2;

export const AppointmentCardInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`

export const AppointmentCardLabel = styled.Text`
  margin-left: 12px;
  font-size: 16px;
`

export const AppointmentCardValue = styled.Text`
  font-weight: 700;
`

export const AppointmentCardBadges = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
`
import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ type }) => typeToBackground(type)};
  border-radius: 40px;
  text-align: center;
  flex: auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
`

const typeToBackground = (type) => {
  switch (type) {
    case 'main':
      return '#2A86FF'
    case 'primary':
      return '#84D269'
    default:
      return '#2A86FF'
  }
}
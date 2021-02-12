import styled from 'styled-components/native'

export const BadgeText = styled.Text`
  background-color: ${({ type }) => typeToBackground(type)};
  color: ${({ type }) => typeToColor(type)};
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 0 16px;
  line-height: 32px;
`

const typeToBackground = (type) => {
  switch (type) {
    case 'main':
      return '#2A86FF'
    case 'primary':
      return '#E5F5DF'
    case 'outline':
      return '#E9F5FF'

    default:
      return '#2A86FF'
  }
}
const typeToColor = (type) => {
  switch (type) {
    case 'main':
      return '#FFF'
    case 'primary':
      return '#61BB42'
    case 'outline':
      return '#4294FF'

    default:
      return '#FFF'
  }
}
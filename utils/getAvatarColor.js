export const getAvatarColor = (letter) => {
  const charCode = letter.toUpperCase().charCodeAt(0)

  if (65 <= charCode && charCode <= 73 || 1048 <= charCode && charCode <= 1055) {
    return {
      background: '#F5D6D9',
      color: '#F38181'
    }
  }

  if (82 <= charCode && charCode <= 91 || 1049 <= charCode && charCode <= 1063) {
    return {
      background: '#F8ECD5',
      color: '#F1A32F'
    }
  }

  if (100 <= charCode && charCode <= 110 || 1064 <= charCode && charCode <= 1071) {
    return {
      background: '#DAD5F8',
      color: '#816CFF'
    }
  }

  return {
    background: '#E9F5FF',
    color: '#2A86FF'
  }
}
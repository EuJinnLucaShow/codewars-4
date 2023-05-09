function getDrinkByProfession(param) {
  const newParam = param.toLowerCase()
  let strOut = ''
  switch (newParam) {
    case 'jabroni':
      strOut = 'Patron Tequila'
      break
    case 'school counselor':
      strOut = 'Anything with Alcohol'
      break
    case 'programmer':
      strOut = 'Hipster Craft Beer'
      break
    case 'bike gang member':
      strOut = 'Moonshine'
      break
    case 'politician':
      strOut = 'Your tax dollars'
      break
    case 'rapper':
      strOut = 'Cristal'
      break
    default:
      strOut = 'Beer'
  }
  return strOut
}

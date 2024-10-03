export const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
export const zipCodeRegExp = /^\d{5}-\d{3}$/
export const phoneNumberRegExp = /(\d{2}|\d{0})(\d{5}|\d{4})[-. ]?(\d{4})$/
export const brazilianCellPhoneNumberRegExp =
  /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/

export const cellPhoneOrPhoneNumberRegExp =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/

export const cellPhoneNumberRegExp = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

export const CPFMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]

export const NFeMask = [/\d/, /\d/]

export const uuidRegExp =
  /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/g

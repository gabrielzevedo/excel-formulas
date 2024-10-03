import { SWRRequest } from './fetcher'

export const formatHours = (value: string, isDate = false): string => {
  const date = isDate ? new Date(value).toLocaleTimeString('pt-br') : value
  const dateFormatted = date.replace(/(\d{2}):(\d{2}).*/, '$1h$2')
  return dateFormatted.replace(/h00$/, 'h')
}

export function formatDate(value: string | Date, removeYear = false): string {
  if (!value) return ''
  const date = new Date(value).toLocaleDateString('pt-br', {
    // month: 'long',
    // day: 'numeric',
    timeZone: 'UTC'
  })
  return removeYear ? date.replace(/\/\d{4}/, '') : date
}

export const formatYear = (date: string | Date): string => {
  return new Date(date).getFullYear().toString()
}

export const formatBoolean = (value?: boolean): string => {
  return value ? 'Sim' : 'Não'
}

export const formatStringToBoolean = (value: string): boolean => {
  return value === 'true'
}

export const formatZipCode = (value: string): string => {
  return value.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export const onlyDigits = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const capitalize = (phrase: string): string => {
  // convert first letter of word to uppercase
  const words = phrase.split(' ')
  const capitalizedWords = words.map((word) => {
    return (
      word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    )
  })
  return capitalizedWords.join(' ')
}

export const formatSnakeCase = (text: string) => {
  return text.toLowerCase().trim().replace(/\s+/g, '_')
}

export const formatCellphone = (value?: string): string => {
  if (!value) return ''
  const formattedValue = onlyDigits(value)
  return formattedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const formatUrlWithParams = (
  url: string,
  params?: SWRRequest['params']
) => {
  const queryString = Object.entries(params || {})
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${encodeURIComponent(v)}`).join('&')
      }
      return `${key}=${encodeURIComponent(value)}`
    })
    .join('&')
  return queryString ? `${url}?${queryString}` : url
}

export const formatDayOfWeek = (
  dayEnglish: string,
  removeSufix = false
): string => {
  const daysOfWeek: { [key: string]: string } = {
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado',
    sunday: 'Domingo'
  }
  return removeSufix
    ? daysOfWeek[dayEnglish].replace('-feira', '')
    : daysOfWeek[dayEnglish]
}

export const extractDateFromDB = (date: string) => {
  // date is in format yyyy-mm-dd
  const onlyDate = date.split('T')[0]
  const [year, month, day] = onlyDate.split('-')
  return {
    year,
    day,
    month
  }
}

export const formatYearsOld = (birthDate?: string): string => {
  if (!birthDate) return ''
  const date = extractDateFromDB(birthDate)
  const today = new Date()

  let age = today.getFullYear() - parseInt(date.year)
  const todayMonth = today.getMonth() + 1 // month is 0 indexed

  const month = todayMonth - parseInt(date.month)
  if (month < 0 || (month === 0 && today.getDate() < parseInt(date.day))) {
    age--
  }
  return age.toString() + ' anos'
}

export const formatBirthDate = (birthDate?: string): string => {
  if (!birthDate) return ''
  const date = extractDateFromDB(birthDate)
  return `${date.day}/${date.month}/${date.year}`
}

export const formatDateDB = (date: string): string => {
  const [day, month, year] = date.split('/')
  return `${year}-${month}-${day}`
}

export const formatNameWithSurname = (name: string) => {
  // name is Gabriel Azevedo Santos
  // return Gabriel Azevedo S., but if name is Gabriel Azevedo, return Gabriel Azevedo
  const names = name.split(' ')
  if (names.length <= 2) return name
  const surname = names.pop()
  return `${names[0]} ${names[1]} ${surname?.charAt(0)}.`
}

export const formatExcerpt = (text: string, length = 100): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text
}

export const formatPlural = (value: number) => (value === 1 ? '' : 's')

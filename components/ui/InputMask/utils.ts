import { MutableRefObject, Ref } from 'react'

import maskDate from './maskDate'
/* docs: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md */

export function composeRefs<T>(...refs: Array<Ref<T>>) {
  return (value: T) => refs.forEach((ref) => setRef(ref, value))
}

export function setRef<T>(ref: Ref<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    const mutableRef = ref as MutableRefObject<T>
    mutableRef.current = value
  }
}

export const formatValuePatterns = {
  default: {},
  onlyNumber: {
    mask: (rawValue: string) => {
      const onlyNumbers = rawValue.replace(/\D/g, '').split('')
      return onlyNumbers.map(() => /\d/)
    },
    inputMode: 'decimal'
  },
  onlyLetter: {
    mask: (rawValue: string) => {
      const onlyLetter = rawValue.replace(/[^A-zÀ-ú]/g, '').split('')
      return onlyLetter.map(() => /[A-zÀ-ú]/)
    }
  },
  onlyAlphanumeric: {
    mask: (rawValue: string) => {
      const onlyAlphanumeric = rawValue.replace(/\W/g, '').split('')
      return onlyAlphanumeric.map(() => /\w/)
    }
  },
  onlyText: {
    mask: (rawValue: string) => {
      const onlyText = rawValue.replace(/[^a-zA-ZÀ-ú'˜0-9\sü]/g, '').split('')
      return onlyText.map(() => /[a-zA-ZÀ-ú'˜`´^0-9\sü]/g)
    }
  },
  date: {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: maskDate('dd/mm/yyyy'),
    keepCharPositions: true,
    inputMode: 'decimal',
    placeholder: '__/__/____'
  },
  zipCode: {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    keepCharPositions: true,
    inputMode: 'decimal',
    placeholder: '_____-___'
  },
  nfe: {
    mask: () => {
      const maxLength = 44
      const mask = []
      for (let i = 1; i <= maxLength; i++) {
        mask.push(/\d/)
        if (i % 4 === 0 && i !== maxLength) mask.push(' ')
      }
      return mask
    },
    keepCharPositions: true,
    inputMode: 'decimal',
    placeholder: '____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____'
  },
  phone: {
    mask: [
      '(',
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ],
    inputMode: 'decimal',
    placeholder: '(__) ____-____'
  },
  cellphone: {
    mask: [
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
    ],
    inputMode: 'decimal',
    placeholder: '(__) _____-____'
  },
  phoneOrCellphone: {
    mask: (rawValue: string) => {
      const cleanedText = rawValue.replace(/[^\d]/g, '')
      if (cleanedText.length > 10) return formatValuePatterns.cellphone.mask
      else return formatValuePatterns.phone.mask
    },
    inputMode: 'decimal',
    placeholder: '(__) _____-____'
  },
  cpf: {
    mask: [
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
    ],
    keepCharPositions: true,
    inputMode: 'decimal',
    placeholder: '___.___.___-__'
  },
  cnpj: {
    mask: [
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
      '/',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/
    ],
    keepCharPositions: true,
    inputMode: 'decimal',
    placeholder: '___.___.___-__'
  }
}

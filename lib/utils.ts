import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { NEXT_PUBLIC_PROJECT_URL } from '@/constants/env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface IBuildUrl {
  path: string
  actualQuery?: URLSearchParams
  query?: Record<string, string>
  removeQuery?: string[]
  message?: {
    type: 'error' | 'success'
    text: string
  }
}

export function buildUrl({
  path,
  actualQuery,
  query,
  removeQuery,
  message
}: IBuildUrl) {
  const url = new URL(
    `${path}${actualQuery ? `?${actualQuery.toString()}` : ''}`,
    NEXT_PUBLIC_PROJECT_URL
  )

  if (message) {
    url.searchParams.set('message', message.text)
    url.searchParams.set('type', message.type)
  }

  if (query) {
    for (const key in query) {
      url.searchParams.set(key, query[key])
    }
  }

  if (removeQuery) {
    for (const key of removeQuery) {
      url.searchParams.delete(key)
    }
  }

  return url.toString()
}

export const isUUID = (uuid: string) => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  return uuidRegex.test(uuid)
}

export const copyToClipboard = async (text: string, callback?: () => void) => {
  try {
    await navigator.clipboard.writeText(text)

    return callback ? callback?.() : alert('Copiado com sucesso!')
  } catch (error) {
    return alert('Erro ao copiar, tente novamente')
  }
}

export const isValidDate = (d: string) => {
  const parsedDate = new Date(d)
  return parsedDate instanceof Date && !Number.isNaN(parsedDate)
}

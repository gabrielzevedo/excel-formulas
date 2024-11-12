'use client'

const localStorageSavedFormulasKey = 'savedFormulas'

export const getSavedFormulas = (): string[] => {
  if (typeof window === 'undefined') return []
  const savedFormulas = localStorage.getItem(localStorageSavedFormulasKey)
  return savedFormulas ? JSON.parse(savedFormulas) : []
}

export const hasSavedFormula = (id: string) => {
  const savedFormulas = getSavedFormulas()
  return savedFormulas.includes(id)
}

export const saveFormula = (id: string) => {
  if (typeof window === 'undefined') return false
  const savedFormulas = getSavedFormulas()
  const newSavedFormulas = [...savedFormulas, id]
  localStorage.setItem(
    localStorageSavedFormulasKey,
    JSON.stringify(newSavedFormulas)
  )
}

export const removeFormula = (id: string) => {
  if (typeof window === 'undefined') return false
  const savedFormulas = getSavedFormulas()
  const newSavedFormulas = savedFormulas.filter(
    (formula: string) => formula !== id
  )
  localStorage.setItem(
    localStorageSavedFormulasKey,
    JSON.stringify(newSavedFormulas)
  )
}

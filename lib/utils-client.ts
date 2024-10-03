import { mutate } from 'swr'

export const clearCacheRoute = (route: string) => {
  mutate(
    (key) =>
      typeof key === 'string' &&
      key.includes(route) &&
      !key.includes('session'),
    undefined,
    {
      revalidate: true
    }
  )
}

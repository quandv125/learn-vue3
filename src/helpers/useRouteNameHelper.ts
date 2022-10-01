import { routersList } from '@/router'
import { filter, first } from 'lodash'

export const useRouteNameHelper = () => {
  return {}
}

export const getRouteName = (name = 'Home'): string => {
  const routeInfo = filter(routersList, ['name', name])
  return first(routeInfo)?.path || ''
}

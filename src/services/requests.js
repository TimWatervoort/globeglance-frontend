import { getRequest } from './api'

export const getUser = async id => {
  const response = await getRequest(`users/${id}`)
  return response
}

export const getRegions = async () => {
  const response = await getRequest('regions')
  return response
}

export const getOneRegion = async id => {
  const response = await getRequest(`regions/${id}`)
  return response
}

import { getRequest } from './api'

export const getUser = async id => {
  const response = await getRequest(`users/${id}`)
  return response
}

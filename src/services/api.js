const baseHeaders = {
  Accept: 'application/json'
}

export const getRequest = async endpoint => {
  const response = await fetch({
    method: 'GET',
    url: `${process.env.GLOBALIZER_API_URL}/${endpoint}`,
    headers: baseHeaders
  })
  return response
}

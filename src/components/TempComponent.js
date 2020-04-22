/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { selectUser } from 'state/users/selectors'
import { loadUserById } from 'state/users/actions'

const TempComponent = (props) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getFirstUser = async () => {
      const response = await props.loadUserById(1);
      setUser(response.payload)
      return response.payload;
    }

    getFirstUser()
  }, [])

  console.log(user)

  return (
    <>
     <h1>Temp Component Loading</h1>
    </>
  )
}

const mapStateToProps = state => ({
  user: selectUser(state)
})

const mapDispatchToProps = {
  loadUserById
}

export default connect(mapStateToProps, mapDispatchToProps)(TempComponent)

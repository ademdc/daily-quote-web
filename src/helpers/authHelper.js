import React from 'react'
import NotAuhtorized from '../components/UI/NotAuthorized';

export const redirectIfNotAuthorized = (user, props) => {
  if(!user.is_admin) { props.history.push('/') }
}

export const renderIfNotAuthorized = (user) => {
  if(user) {
    if(!user.is_admin) {
      return <NotAuhtorized />
    }
  }
}
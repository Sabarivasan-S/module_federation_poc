import React from 'react'
import { Link } from '@mui/material'

export default function MoveToSignIn() {

  // can get the base URL from window.location.origin or props
  
  return (
    <div>
      <div>Already have an Account?</div>
      <div><Link href={`http://localhost:3001/platform/sign_in`} target="_top">Sign In</Link></div>
    </div>
  )
}

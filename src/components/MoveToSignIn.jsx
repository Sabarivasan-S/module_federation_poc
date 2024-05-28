import React from 'react'
import { Link } from '@mui/material'

export default function MoveToSignIn(props) {
  console.log(props)
  return (
    <div>
      <div>Already have an Account?</div>
      <div><Link href={`${props.baseUrl}/platform/signin`}>Sign In</Link></div>
    </div>
  )
}

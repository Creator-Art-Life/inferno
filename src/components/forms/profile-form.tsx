import React, { useState } from 'react'
// import { EditUserProfileSchema } from '@/lib/types'

type Props = {
  user: any
  onUpdate?: any
}

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>ProfileForm</div>
  )
}

export default ProfileForm
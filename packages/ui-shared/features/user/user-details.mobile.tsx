import React from 'react'
import { UserDetailScreenContent } from './detail-screen.context'

import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

export function UserDetailMobile() {
  const [id] = useParam('id')

  return <UserDetailScreenContent id={id!} />
}

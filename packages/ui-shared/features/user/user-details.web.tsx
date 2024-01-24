import React from 'react'

import { UserDetailScreenContent } from './detail-screen.context'

export function UserDetailWeb({ id }: { id: string }) {
  return <UserDetailScreenContent id={id} />
}

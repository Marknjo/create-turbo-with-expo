'use client'

import { UserDetailMobile } from './user-details.mobile'
import { UserDetailWeb } from './user-details.web'

export function UserDetailScreen({ id }: { id?: string }) {
  return <>{!id ? <UserDetailMobile /> : <UserDetailWeb id={id} />}</>
}

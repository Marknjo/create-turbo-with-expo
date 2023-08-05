import { ElementType } from 'react'
import { cn } from '../../utils'

export function El(props: {
  as?: ElementType<any>
  children?: React.ReactNode
  className?: string
}) {
  const { as: Component = 'div' } = props

  return <Component className={cn(`flex ${props.className}`)} {...props} />
}

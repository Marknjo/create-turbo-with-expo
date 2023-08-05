import { Text } from '../../../components/Typography'
import { MotiLink } from '../../../components/only-moti'

export function AnimatableLink() {
  return (
    <MotiLink
      href="/users/fernando"
      animate={({ hovered, pressed }) => {
        'worklet'

        return {
          scale: pressed ? 0.95 : hovered ? 1.1 : 1,
          rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
        }
      }}
      transition={{
        type: 'timing',
        duration: 150,
      }}
    >
      <Text selectable={false} className="text-base font-bold text-orange-500">
        Moti Link
      </Text>
    </MotiLink>
  )
}

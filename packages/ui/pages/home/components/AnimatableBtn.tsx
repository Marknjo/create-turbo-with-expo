import { useReducer } from 'react'
import { PressableView } from '../../../components/Layouts'
import { MotiView } from '../../../components/only-moti'
import { Text } from '../../../components/Typography'

import { AnimatePresence } from 'moti'

export function AnimatableBtn() {
  const [visible, toggle] = useReducer(s => !s, true)

  return (
    <PressableView
      className="items-center justify-center rounded-sm bg-orange-900 px-3 py-2"
      onPress={toggle}
    >
      <AnimatePresence>
        {visible && (
          <MotiView
            className="rounded-md bg-slate-100 px-3 py-2"
            from={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            <Text>Animate</Text>
          </MotiView>
        )}
      </AnimatePresence>
    </PressableView>
  )
}

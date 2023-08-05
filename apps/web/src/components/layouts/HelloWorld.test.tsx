import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import HelloWorld from './HelloWorld'

describe('tests', () => {
  it('should render a component', () => {
    render(<HelloWorld />)
  })
  const displayText = 'Hello There!'
  expect(screen.queryByText(displayText)).toBeDefined()
})

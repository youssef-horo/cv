import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import RootLayout from '../layout'

describe('Root Layout', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    expect(container.textContent).toContain('Test Content')
  })

  it('has correct HTML lang attribute', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    const htmlElement = container.querySelector('html')
    expect(htmlElement).toHaveAttribute('lang', 'en')
  })
})


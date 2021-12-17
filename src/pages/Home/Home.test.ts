import { render } from '@testing-library/react'
import { Home } from '.'

describe('Home Page', () => {
  test('must displayed on screen', () => {
    render(Home())
  })
})

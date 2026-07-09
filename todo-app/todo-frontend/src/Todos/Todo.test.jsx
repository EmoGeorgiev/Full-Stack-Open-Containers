import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo text', () => {
  const todo = {
    text: 'Learn Docker',
    done: false,
  }

  render(
    <Todo
      todo={todo}
      deleteTodo={() => { }}
      completeTodo={() => { }}
    />
  )

  const element = screen.getByText('Learn Docker')

  expect(element).toBeDefined()
})

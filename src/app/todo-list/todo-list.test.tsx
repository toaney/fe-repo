import {render, screen} from '@testing-library/react'
import TodoList from './page'

test('test', () => {
  expect(true).toBe(true);
})

it('should have "Todo List" title', () => {
  render(<TodoList />) // Arrange

  const myElem = screen.getByText('Todo List') // Act

  expect(myElem).toBeInTheDocument() // Assert
})
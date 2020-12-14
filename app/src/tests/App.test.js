import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import DocumentList from './components/DocumentList';
import data from '../data/data.json';



//I need to improve my testing skills!
test('get document list', () => {
  render(<StyledList data={getdata}>)

});

test('modal shows the data and a close button', () => {
  render(<DocumentList data={modalData}> />)

});

test('seacrh file names', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'data.name' } })
  expect(input.value).toBe('data.name')
})


import { render, screen } from '@testing-library/react';
import App from '../App';
import DocumentList from './components/DocumentList';
import Document from './components/Document';

test('get document list', async () => {
  render(<DocumentList />)

});


test('get each document', async () => {
    render(<Document />)
  
  });
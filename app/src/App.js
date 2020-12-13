import React from 'react'
import Header from './components/Header';
import DocumentList from './components/DocumentList';
import styled from 'styled-components';

const StyledApp = styled.div `
  width: 100%;
  background-color:#CCEBFF ;

`;

function App() {
  return (
    <div className="App">
      <StyledApp>
          <Header />
          <body>
            <main>
              <DocumentList />
            </main>
          </body>
          <footer className="container">
              <div className="by">
              <p className="p-4">by Juliana Ferreira</p>
              </div>
          </footer>
        </StyledApp>
    </div>
  );
}

export default App;

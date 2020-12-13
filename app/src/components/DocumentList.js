import React from 'react';
import styled from 'styled-components';
// import Document from './components/Document';
import SearchBar from './SearchBar';

export default function DocumentList() {


  const StyledPage = styled.div `
    width: 100%;
    background-color:#CCEBFF ;
   
  `;

    return (
        <>
        <StyledPage>
            <section className="documentList relative py-8 mb-16 md:py-16 hero sm:pb-40 md:pb-32 bg-brand-100">
                <div className="container">
                    <div className="row">
                        <h2 className="ml-2 pt-4">Documents</h2>
                    </div>
                    <div className="row">
                        <SearchBar/>
                    </div>
                    <div className="row">
                        <h3 className="ml-2 pt-4">All Folders</h3>
                    </div>
                    <div className="row">
                  
                    </div>
                </div>
             </section>
        </StyledPage>
        </>
    )
}

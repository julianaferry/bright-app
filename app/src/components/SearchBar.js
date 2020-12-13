import React from 'react';
import styled from 'styled-components';


const SearchBar = () => {

  const StyledSearch = styled.input `
    width: 20rem;
    background: #F2F1F9;
    border:none;
    padding: 0.5rem;
    margin: 2rem 0;
  `;


  return (
    <StyledSearch 
        key="search"
        placeholder={"search file name"}
      
    />
  );
}

export default SearchBar;
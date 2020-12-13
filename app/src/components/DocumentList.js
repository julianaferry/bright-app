import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
// import Document from './components/Document';

import data from '../data/data.json';

// Styles
const StyledSearch = styled.input `
width: 20rem;
background: #F2F1F9;
border:none;
padding: 0.5rem;
margin: 2rem 0;
`;

const StyledPage = styled.div `
    width: 100%;
    background-color:#CCEBFF ;
`;

const StyledList = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const StyledListLi = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


//get data
const dataUrl = "../data/data.json";


//all documents list 
export default function DocumentList() {

    //set states
    const [getdata, setGetData] = useState([]);
    const [findFile, setFindFile] = useState();



    //fetch data json
    useEffect(() => {
        fetch( dataUrl)
          .then(res => res.json())
          .then(data => {
            setGetData(getdata)
          })
      }, []);


      function onChange  ()  {

      }





    return (
        <>
        <StyledPage>
            <section className="documentList relative py-8 mb-16 md:py-16 hero sm:pb-40 md:pb-32 bg-brand-100">
                <div className="container">
                    <div className="row">
                        <h2 className="ml-2 pt-4">Documents</h2>
                    </div>
                    <div className="row">
                        <StyledSearch
                        key="search"
                        value={findFile}
                        placeholder={"search file name"}
                        onChange={onChange}

                        
                        />
                    </div>
                    <hr className="mb-6" />
                    <div className="row">
                        <h3 className="ml-2 pt-4">All Folders</h3>
                    </div>
                  
                    <div className="row">
                        <StyledList>
                            {data && 
                                data.map(item => (
                                <StyledListLi key={item.name} className="mt-4">
                                {item.type}
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="190" height="50" className="pt-2">
                                            <path d="M469.338,152.564v-40.223C469.338,85.647,447.69,64,420.996,64H261.04l-85.333-42.667H91.012
                                                c-26.694,0-48.341,21.647-48.341,48.341v82.887C17.881,160.851,0,184.245,0,211.819v216.363c0,34.502,27.983,62.485,62.485,62.485
                                                h387.029c34.502,0,62.485-27.983,62.485-62.485V211.819C512,184.248,494.123,160.857,469.338,152.564z M85.338,69.675
                                                c0-3.13,2.545-5.675,5.675-5.675h74.623l85.333,42.667h170.028c3.13,0,5.675,2.545,5.675,5.675v36.992H85.338V69.675z
                                                M469.333,428.181c0,10.938-8.881,19.819-19.819,19.819H62.485c-10.938,0-19.819-8.881-19.819-19.819V211.819
                                                c0-10.938,8.881-19.819,19.819-19.819h387.029c10.938,0,19.819,8.881,19.819,19.819V428.181z"/>
                                    </svg>
                               
                                    {item.name}                   
                                </StyledListLi>
                            ))}
                        </StyledList>
                    </div>
                </div>
             </section> 
        </StyledPage>
        </>
    )
}

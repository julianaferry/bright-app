import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
// import Document from './components/Document';
import SearchBar from './SearchBar';
import data from '../data/data';


const StyledPage = styled.div `
    width: 100%;
    background-color:#CCEBFF ;
`;


export default function DocumentList(props) {

    const [data, setData] = useState({  });


    useEffect(() => {
        let url = "../data/data.js";
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
        }, []);


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
                    <hr className="mb-6" />
                    <div className="row">
                        <h3 className="ml-2 pt-4">All Folders</h3>
                    </div>
                  
                    <div className="row">
                    <ul>
                    {data.map(item => (
                      <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                    </div>
                </div>
             </section>
            
        </StyledPage>
        </>
    )
}

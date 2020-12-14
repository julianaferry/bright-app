import React,{useState, useEffect, useMemo} from 'react';
import data from '../data/data.json';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap';

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
    background-color:#CCEBFF;
`;

const StyledList = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
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
    const [searchFile, setSearchFile] = useState('');
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);

    //fetch data json
    useEffect(() => {
        fetch( dataUrl)
          .then(res => res.json())
          .then(data => {
            setGetData(data)
      
          })
      }, []);


      //filter data.name => needs to be finished
      const fileNames =  useMemo(() => {
        if (!searchFile) return data;

             data.filter(value =>  {
                 console.log(value.name)
                 return value.name.toLowerCase().includes(searchFile.toLowerCase()); 
        })
    }, [searchFile]);


    //modal open/ close
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    //mmodal open: welcome to the company text:)
    let handleModal = () => {
        
        const filtered = data.filter(item => item.type === 'folder' );
        console.log(filtered)
        
          filtered.forEach(elem =>(
                elem.files.map(file => (
                    setModalData(file)
                ))
         ))
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
                        className="ml-2 form-control"
                        type="text"
                        value={searchFile}
                        placeholder={"search filename"}
                        aria-label="Search"
                        onChange={ e => setSearchFile(e.target.value)}
                        />
                    </div>
                    <hr className="mb-6" />
                    <div className="row">
                        <h3 className="ml-2 pt-4">All Folders</h3>
                    </div>
                  
                    <div className="row">
                        <StyledList data={getdata}>
                            {fileNames  && 
                                fileNames.map(item => (
                                <StyledListLi
                                key={item.name}
                                className="mt-4" 
                                value={item.name}
                                onClick={handleShow}
                                  >
                                    <h5>{item.type}</h5>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="190" height="50" className="pt-2">
                                            <path d="M469.338,152.564v-40.223C469.338,85.647,447.69,64,420.996,64H261.04l-85.333-42.667H91.012
                                                c-26.694,0-48.341,21.647-48.341,48.341v82.887C17.881,160.851,0,184.245,0,211.819v216.363c0,34.502,27.983,62.485,62.485,62.485
                                                h387.029c34.502,0,62.485-27.983,62.485-62.485V211.819C512,184.248,494.123,160.857,469.338,152.564z M85.338,69.675
                                                c0-3.13,2.545-5.675,5.675-5.675h74.623l85.333,42.667h170.028c3.13,0,5.675,2.545,5.675,5.675v36.992H85.338V69.675z
                                                M469.333,428.181c0,10.938-8.881,19.819-19.819,19.819H62.485c-10.938,0-19.819-8.881-19.819-19.819V211.819
                                                c0-10.938,8.881-19.819,19.819-19.819h387.029c10.938,0,19.819,8.881,19.819,19.819V428.181z"/>
                                    </svg>
                               
                                    <p>{item.name}</p>
                                    <p>{item.added}</p>           
                                </StyledListLi>
                            ))}
                        </StyledList>
     
                            <Modal key={modalData.id} show={show} centered={true} onHide={handleClose} data={modalData} onClick={handleModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Document </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p>{modalData.name}</p>
                            <p>{modalData.type}</p>
                            <p>{modalData.added}</p>
                            </Modal.Body>
                        </Modal>
                        
                    </div>
                </div>
             </section> 
        </StyledPage>
        </>
    )
}

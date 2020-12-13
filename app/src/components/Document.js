import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import Modal from 

export default function Document(data) {
    return (
        <div>
        <section className="document">
            <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Document</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>
        
            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
      </section>
        </div>
    )
}

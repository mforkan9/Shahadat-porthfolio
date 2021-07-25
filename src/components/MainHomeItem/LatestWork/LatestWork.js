import React from 'react';
import { useState } from 'react';
import img1 from './173431603_2169636989839984_6113434369001084240_n.jpg'
import './LatestWork.scss'
import { Button, Modal } from 'react-bootstrap';
import { useEffect } from 'react';

const LatestWork = () => {
    const [modalShow, setModalShow] = useState(false);
    const [workAddedShow, setWorkAddedShow] = useState([])
    const [findData, setFindData] = useState([])

    console.log(findData)
    const handleClose = () => {
        setModalShow(false)
    };
    const handleShow = () => {
        setModalShow(true)
    };

    useEffect(() => {
        fetch('http://localhost:5000/showAddData')
            .then(res => res.json())
            .then(data => setWorkAddedShow(data))
    }, [])

    return (
        <div className='latestBody' id='latest'>
            <h1 className='text-center'>My Latest Work</h1>
            <div className="box container">
                <div className='row'>
                    {
                        workAddedShow.map(workData => {
                            return <div className='col-md-3 col-6 ' onClick={() => handleShow(setFindData(workData))} >
                                <img src={workData.image} alt="" />
                            </div>
                        })
                    }


                </div>
            </div>


            <Modal
                show={modalShow}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title>{findData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {findData.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LatestWork;
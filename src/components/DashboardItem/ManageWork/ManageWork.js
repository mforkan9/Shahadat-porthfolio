import React, { useState } from 'react';
import { useEffect } from 'react';
import './ManageWork.scss'
import { Link } from 'react-router-dom';
const ManageWork = () => {
    const [manageDataLoad,setManageDataLoad] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/showAddData')
        .then(res => res.json())
        .then(data => setManageDataLoad(data))
    },[])

    const handleWorkDelete = (id) =>{ 
        fetch('http://localhost:5000/workDelete/' + id,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }
    return (
        <div className='manage-main'>
            <table class="table">
                <thead className='table-dark'>
                    <tr className='sticky-top'>
                        <th scope="col" className=''>Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageDataLoad.map(data =>{
                            return <tr>
                            <td><img src={data.image} alt="" /> </td>
                            <td className='fw-bolder'>{data.title}</td>
                            <td onClick={() => handleWorkDelete(data._id)}><Link to='/dashboard'><button> Remove</button> </Link> </td>
                        </tr>
                        })
                    }
                   
               
                </tbody>
            </table>
        </div>
    );
};

export default ManageWork;
import React from 'react';
import { useState } from 'react';
import './AddWork.scss'
import imgs from './success.png'
const AddWork = () => {
    const [uploadFile, setUploadFile] = useState(false)
    const [headingStore, setHeadingStore] = useState(null)
    const [describeStore, setDescribeStore] = useState(null)
    const [addSuccess, setAddSuccess] = useState(false)


    const handleFileChange = async (e) => {
        const files = e.target.files
        const newFile = new FormData()
        newFile.append('file', files[0])
        newFile.append('upload_preset', 'storeWorkImage')


        const uploadWorkImage = await fetch('https://api.cloudinary.com/v1_1/forkancloudinary/image/upload', {
            method: 'POST',
            body: newFile
        })
        const file = await uploadWorkImage.json()
        setUploadFile(file.secure_url)
    }


    const handleTitleChange = (e) => {
        const title = e.target.value
        setHeadingStore(title)
    }


    const handleDescribeChange = (e) => {
        const descriptionWord = e.target.value
        setDescribeStore(descriptionWord)
    }



    const handleSubmit = (e) => {
        const addedData = {
            image: uploadFile,
            title: headingStore,
            description: describeStore
        }
        console.log(addedData);
        fetch('http://localhost:5000/addWorkData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedData)
        })
            .then(res => setAddSuccess(res.ok))

    }
    return (
        <div className='container'>
            {
                addSuccess
                    ?
                    <div>
                    <img className='rounded mx-auto d-block mt-5' src={imgs} alt=""/>
                    <h5 className='text-center text-success'>Work Added Success</h5>
                    </div>
                    :

                    <div className='row'>
                        <div className='col-md-6 add-col1'>
                            <h5>Upload Image:</h5>
                            <div className='add-inner1'>
                                {
                                    uploadFile ? <h5 className='text-success'>Upload Success</h5> :

                                        <div class='file file--upload'>
                                            <div class='file file--upload'>
                                                <label for='input-file'>
                                                    <i class="zmdi zmdi-cloud-upload zmdi-hc-3x"></i>Upload
                                                </label>
                                                <input onChange={handleFileChange} style={{ width: '150px' }} id='input-file' type="file" required class="form-control" name="file" placeholder="file upload" aria-label="Last name" />
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className='col-md-6 add-col2'>
                            <h5>Add Heading:</h5>
                            <div className='add-inner2'>
                                <input onBlur={handleTitleChange} id='heading' className='inputStyle' type="text" placeholder='Header Text' required />
                            </div>
                        </div>
                        <div className='col-md-6 add-col3' >
                            <h5>Describe here:</h5>
                            <div className="add-inner3">
                                <textarea onBlur={handleDescribeChange} name="description" id="describe" cols="70" rows="7" required placeholder='Description Write'> </textarea>
                            </div>

                        </div>
                        <div className='col-md-6 add-col4'>
                            <div class="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
                                {
                                    uploadFile && headingStore && describeStore ? <button onClick={() => handleSubmit()} class="" type="button">Submit</button> : null
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AddWork;
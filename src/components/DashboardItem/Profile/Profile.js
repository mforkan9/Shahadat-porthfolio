import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Profile.scss'


const Profile = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const [load, setLoad] = useState(false)
    const [successUpload, setSuccessUpload] = useState(false)
    const [loadedImage, setLoadedImage] = useState([])


    const handleChange = async (e) => {
        const files = e.target.files
        const imageData = new FormData()
        imageData.append('file', files[0])
        imageData.append('upload_preset', 'storeImage')

        const upload = await fetch('https://api.cloudinary.com/v1_1/forkancloudinary/image/upload', {
            method: 'POST',
            body: imageData
        })
        const file = await upload.json()
        setLoad(file.secure_url)
        setImageUrl(file.secure_url)
    }

    const handleSubmit = () => {
        const images = {
            img: imageUrl
        }
        fetch('http://localhost:5000/addProfileImage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(images)
        })
            .then(res => setSuccessUpload(res.ok))
    }

    useEffect(() => {
        fetch('http://localhost:5000/showProfileImage')
            .then(res => res.json())
            .then(Data => setLoadedImage(Data))
    }, [])


    const handleDelete = (id) =>{ 
        fetch('http://localhost:5000/delete/' + id,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        <div>
            <div className='row container'>
                <div className='col-md-6 first-col'>
                    <div className='profile-inner1'>
                        {
                            successUpload
                                ?
                                <h4 className='text-success'>Upload Success <Link to='/dashboard'> <i class="zmdi zmdi-replay zmdi-hc-1x "></i></Link></h4>
                                :
                                <div class='file file--upload'>
                                    <div class='file file--upload'>
                                        <label for='input-file'>
                                            <i class="zmdi zmdi-cloud-upload zmdi-hc-3x"></i>Upload
                                        </label>
                                        <input style={{ width: '150px' }} onChange={handleChange} id='input-file' type="file" required class="form-control" name="file" placeholder="file upload" aria-label="Last name" />
                                    </div>
                                    {
                                        load ? <button onClick={() => handleSubmit()}>ADD</button> : null
                                    }
                                </div>
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="outer-container">
                        <div class="inner-container">
                            <div class="element">
                                <table class="table">
                                    <thead className='table-success sticky-top'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th className='text-center' scope="col">Image Url</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loadedImage.map((url , index) =>{
                                               return <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td className='text-break'>{url.img}</td>
                                                <td onClick={() => handleDelete(url._id)}><Link to='/dashboard'> Remove </Link></td>
                                            </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
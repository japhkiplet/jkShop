import app from '../Firebase';
import {getStorage,ref,uploadBytesResumable,uploadBytes,getDownloadURL,} from "firebase/storage";
import { useState } from 'react';
import './products.css'
import { addProduct } from '../redux/apiCalls';
import { useSelector,useDispatch } from 'react-redux';

const Product = () => {
    const  dispatch  = useDispatch();
   const [file,setFile] = useState(null);
   const [title,setTitle] = useState('');
   const [category,setCategory] = useState('');
   const [photos,setPhotos] = useState([]);
   const [price,setPrice] = useState('');
   const [description,setDescription] = useState('');
 
   const handleClick = (e)=>{
    e.preventDefault(); 
    console.log(file)
const fileName = new Date().getTime() + file.name;
const storage = getStorage();
const storageRef = ref(storage, fileName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
   
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }

); 
addProduct(dispatch,{title,description,price,photos,title,category})
// console.log(title,description,price,photos,title,category)
}

    return (
        <div className='products-page'>
            <form className='formone' onSubmit={handleClick}>
                <div className="mb-3">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label><br />
                    <input type="text"
                        id='title'
                        value={title}
                        placeholder={title}
                        className="input input-bordered input-primary w-[300px] text-black"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label><br />
                    <select className="select select-primary w-[300px]" id='category' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option disabled >{category}</option>
                        <option>male</option>
                        <option>female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label><br />
                    <input type="text"
                        id='title'
                        value={price}
                        placeholder={price}
                        className="input input-bordered input-primary w-[300px] text-black"
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-3 w-[300px]'>
                    <label htmlFor='description'>
                        <span className="label-text"> Description</span>
                    </label><br />
                    <textarea className="textarea textarea-primary  text-black" value={description} placeholder={description} id='description' onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="mb-3 w-[300px] mt-4px">
                    <label htmlFor="title" className="form-label">
                        Photo
                    </label><br />
                    <input
                        type="file"
                        id='photos'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className='flex'>
                    {
                        photos?.map(photo => (
                            <div className='mx-3' key={photo?.name}>
                                <img src={photo} alt='img' width='100px' height='100px' />
                            </div>
                        ))
                    }
                </div>
                <button type=' submit' className='bg'>Submit</button>
            </form>
        </div>
    )
}

export default Product


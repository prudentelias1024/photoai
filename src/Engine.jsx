import * as tf from '@tensorflow/tfjs';
import *  as mobilenet from '@tensorflow-models/mobilenet'
import Image from './test.jpg'
import {useEffect, useState, useRef} from 'react';
const Engine = () => {
  const [model, setModel] = useState();
  const[modelLoading, setModelLoading] = useState(false)
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState(null)
  const imageRef = useRef()
  
  const loadModel = async() => {
    setModelLoading(true);
    try{
    
     const model = await mobilenet.load();

     setModel(model);
     setModelLoading(false);
    } catch(error){
      console.log(error)
      setModelLoading(false)
    }
  }
  const identify = async() => {
    const result = await model.classify(imageRef.current);
    console.log(result)
    setPredictions(result)
  }
  useEffect(()=> {
    loadModel();
  },[])
  
  if(modelLoading){
    return (<h1>Model Loading</h1>)
  } 
  return (
   <div className="text-center mt-5">
{!image? <form >
     <input type="file" capture='camera' onChange={(e)=> {
      if(e.target.files.length > 0){
      const url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
        }
     }}  />
    </form>: 
    <>
   <img className="justify-center" src={image} crossOrigin="anonymous" ref={imageRef}/>
    <button className='text-white bg-[#512bd4] p-3' onClick={() => {identify()
    }}> Classify</button> 
    </>
 } 
  {predictions !== null? 
   <p>{predictions[0].className}</p>
  
: ''}
   </div>
 );
}
export default Engine